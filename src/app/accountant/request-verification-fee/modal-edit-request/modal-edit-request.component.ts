
import { HttpClient } from '@angular/common/http';
import { Component,OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import * as saveAs from 'file-saver';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { ApiService } from 'src/app/api.service';
import { MessagesService } from 'src/app/message/messages.service';
import { ImageModalComponent } from 'src/app/students/profile-student/image-modal/image-modal.component';
import Swal from 'sweetalert2';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-modal-edit-request',
  templateUrl: './modal-edit-request.component.html',
})
 
export class ModalEditRequestComponent implements OnInit{
  // products: Product[];

  ngOptionsFee = ["Phí xét tuyển", "Học Phí"];
  @ViewChild("toast") toast: ElementRef | undefined;

  form!: FormGroup;
  formData: FormData = new FormData();

  editStatus!: number;

  profileStatus!: number;

  feeVerification!: FormGroup;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';



  ngOptionsGender: Array<string> = ["Nam", "Nữ"]
  ngDropdownGender = "Nam";
  years: number[] = [];


  FullName!: string;
  CertificateOfGraduation!: File;

  @Input() public listFee : any[] = [];


  ngOptionsMajors = ["Công Nghệ Thông Tin", "Quản Trị Kinh Doanh", "Thiêt Kế Đồ Họa", "Quản Trị Marketing", "Quản Trị Sự Kiện", "Quản Trị Truyền Thông"];


  ngOptionsProvinceTHPT = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước",
    "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ", "Đà Nẵng", "Hải Phòng", "Hà Nội", "TP HCM"];

  ngOptionsHightSchool = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang"]

  onChange(event: any){
    const Id = event.target.value;
    const isChecked = event.target.checked;
    
   
    this.listFee = this.listFee.map((item) => {
      if (item.Id == Id) {
        item.select = isChecked;
        return item;
      }
      return item;
    });
    console.log(this.listFee)

    
    
  }

  openModal(imageUrl: string) {
    const modalRef = this.modalService.open(ImageModalComponent, { size: 'lg' });
    modalRef.componentInstance.imageUrl = imageUrl;
  }


  updateProfileStatus(status: any) {

    const id = this.route.snapshot.params['Id'];
      
      
          this.api.updateEnoughProfile(id, status).subscribe(response => {
          
            this.profile();
            this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });

          },
            error => {
          
              this.profile();
              console.log(error);
              this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
            }
          );
        
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        // }
  }

  updateAllowEditing(status: any) {
    const id = this.route.snapshot.params['Id'];
      
      
          this.api.updateAllowEditing(id, status).subscribe(response => {
            // Swal.fire('Saved!', '', 'success')
            // this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
            //   this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
            //     this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
            //   });
            // })
            this.profile();
            this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });

          },
            error => {
              // this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
              //   this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
              //     console.log(error);
              //     this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
              //   });
              // })
              this.profile();
              console.log(error);
              this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
            }
          );
        
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        // }
  }

  editRequest(){
    if(this.editStatus == 0){
      const id = this.route.snapshot.params['Id'];
      const updateAllowEditingStatus = 2;
      
          this.api.updateAllowEditing(id, updateAllowEditingStatus).subscribe(response => {
            // Swal.fire('Saved!', '', 'success')
            // this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
            //   this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
            //     this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
            //   });
            // })
            this.profile();
            this.toastService.success({ detail: "Success", summary: "Request Success", duration: 3000 });

          },
            error => {
              // this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
              //   this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
              //     console.log(error);
              //     this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
              //   });
              // })
              this.profile();
              console.log(error);
              this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
            }
          );
        
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        // }
      
    }
    
  }

  constructor(
     public ref: DynamicDialogRef,
   
    private scriptLoader: MessagesService,
    private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toastService: NgToastService) {


    this.feeVerification = this.formBuilder.group({
      Id: new FormControl(''),
      FullName: new FormControl(''),
      Gender: new FormControl(''),
      Birthday: new FormControl(''),
      PlaceOfBirth: new FormControl(''),
      Nationality: new FormControl(''),
      DateCitizen: new FormControl(''),
      PlaceCitizen: new FormControl(''),
      HightSchool: new FormControl(''),
      provinceTHPT: new FormControl(''),
      Address: new FormControl(''),
      GraduationYear: new FormControl(''),
      CitizenIdentificationNum: new FormControl(''),
      LinkFacebook: new FormControl(''),
      Email: new FormControl(''),
      PhoneNumberSponsor1: new FormControl(''),
      NameSponsor1: new FormControl(''),
      PhoneNumberSponsor2: new FormControl(''),
      NameSponsor2: new FormControl(''),
      EmailSponsor1: new FormControl(''),
      EmailSponsor2: new FormControl(''),



      CertificateOfGraduation: new FormControl(''),
      TemporaryCertificateOfGraduation: new FormControl(''),
      StudyRecords: new FormControl(''),
      EnglishCertificate: new FormControl(''),
      BirthCertificate: new FormControl(''),
      PortraitImage: new FormControl(''),
      CitizenIdentification: new FormControl(''),
      OtherPapers: new FormControl(''),
      Phone: new FormControl(''),
      Majors: new FormControl(''),
    });

    const currentYear = new Date().getFullYear() + 5;
    this.years = Array.from({ length: 20 }, (_, i) => currentYear - i);
  } //dependency injection
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  

  profile() {
    this.listFee.map((item: any) => {
      //add key value
      item['select'] = false;
    })


    //get password from localstorage
    // var account: any = localStorage.getItem('account');
    // var phone = JSON.parse(account).Phone;
    // console.log("dsadsds" + phone);

    const Id = this.route.snapshot.params['Id'];
    

    this.api.getStudentById(Id
    ).subscribe(async res => {

     

      var d = await JSON.parse(res);
      this.editStatus = d.student.AllowEditing

      this.profileStatus = d.student.EnoughProfile
     
      

      localStorage.setItem('studentPhone', d.student.Phone);

      let data = await { ...d.student };
      console.log(data);

      let array = await data.ImageFolder.split('\\')








      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.feeVerification.get(key)?.setValue(data[key]);
        }

      }
      this.feeVerification.get('FullName')?.disable();
      this.feeVerification.get('Phone')?.disable();

      let birthday = new Date(data.Birthday);
      console.log(birthday);
      let dateCitizen = new Date(data.DateCitizen);
      
      this.feeVerification.get('Birthday')?.setValue(moment(birthday).format('dd-MM-yyyy'));
      this.feeVerification.get('DateCitizen')?.setValue(moment(dateCitizen).format('dd-MM-yyyy'));

     
    },

      error => {
        console.log("Error", error);
        alert("Error");
        // this.router.navigateByUrl('/students');
      }

    );

  }


  

@ViewChild('myModal') myModal: any;


  async onSubmit() {
    //get list by select = true
    const listFeeType = this.listFee.filter(x => x.select == true);

    const data = {
      StudentId: this.route.snapshot.params['Id'],
      RequestDate: moment().format('YYYY-MM-DD'),
      PaymentValue: 20000000,
      FeeType: listFeeType
    }

    console.log(data);
    

    Swal.fire({
      title: 'Are you sure you want to verify the fee for this student?',
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.api.addPamentStudent(data).subscribe(response => {
          Swal.fire('Sent verification fee successfully!', '', 'success')
          this.modalService.dismissAll();
          this.profile()
          
        },
          error => {
            console.log(error);
            Swal.fire(error.error.err, '', 'error')
           

          }
        );
      }
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    })
  }


  private citis?: HTMLSelectElement;
  private districts?: HTMLSelectElement;
  private wards?: HTMLSelectElement;




}
