import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/api.service';
import { MessagesService } from 'src/app/message/messages.service';
import { ImageModalComponent } from '../profile-student/image-modal/image-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-events',
  templateUrl: './confirm-events.component.html',
  styleUrls: ['./confirm-events.component.css']
})
export class ConfirmEventsComponent {

  @ViewChild("toast") toast: ElementRef | undefined;

  eventsByStudent: any[] = [];

  form!: FormGroup;
  formData: FormData = new FormData();

  editStatus!: number;
  profileStatus!: number;


  uploadForm!: FormGroup;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';



  ngOptionsGender: Array<string> = ["Nam", "Nữ"]
  ngDropdownGender = "Nam";
  years: number[] = [];


  FullName!: string;
  CertificateOfGraduation!: File;


  ngOptionsMajors = ["Công Nghệ Thông Tin", "Quản Trị Kinh Doanh", "Thiêt Kế Đồ Họa", "Quản Trị Marketing", "Quản Trị Sự Kiện", "Quản Trị Truyền Thông"];


  ngOptionsProvinceTHPT = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước",
    "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ", "Đà Nẵng", "Hải Phòng", "Hà Nội", "TP HCM"];

  ngOptionsHightSchool = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang"]


  // images: Images = {
  //   CertificateOfGraduation: null,
  //   TemporaryCertificateOfGraduation: null,
  //   StudyRecords: null,
  //   EnglishCertificate: null,
  //   BirthCertificate: null,

  //   PortraitImage: null,
  //   CitizenIdentificationIm: null,
  //   OtherPapers: null,
  // };

  // student: Students = {
  //   FullName: null,
  //   Gender: null,
  //   Birthday: null,
  //   PlaceOfBirth: null,
  //   Nationality: null,
  //   CitizenIdentificationNum: null,
  //   DateCitizenIdentification: null,
  //   PlaceCitizen: null,
  //   GraduationYear: null,
  //   LinkFacebook: null,
  //   Email: null,
  //   PhoneNumberSponsor1: null,
  //   NameSponsor1: null,
  //   PhoneNumberSponsor2: null,
  //   NameSponsor2: null,
  //   EmailSponsor1: null,
  //   EmailSponsor2: null,
  //   CertificateOfGraduation: null,
  // };

  openModal(imageUrl: string) {
    const modalRef = this.modalService.open(ImageModalComponent, { size: 'lg' });
    modalRef.componentInstance.imageUrl = imageUrl;
  }



  // imgSrc?:string;
  // onClick(event: any){
  //   const imgElem = event.target;
  //   var target = event.target || event.srcElement || event.currentTarget;
  //   var srcAttr = target.attributes.src;
  //   this.imgSrc = srcAttr.nodeValue;
  //   console.log(this.imgSrc);
  // }

  editRequest(){
    if(this.editStatus == 0){
      const id = this.route.snapshot.params['ID'];
      const updateAllowEditingStatus = 2;
      
          this.api.updateAllowEditing(id, updateAllowEditingStatus).subscribe(response => {
            // Swal.fire('Saved!', '', 'success')
            // this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
            //   this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
            //     this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
            //   });
            // })
            this.events();
            this.toastService.success({ detail: "Success", summary: "Request Success", duration: 3000 });

          },
            error => {
              // this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
              //   this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
              //     console.log(error);
              //     this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
              //   });
              // })
              this.events();
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
    private scriptLoader: MessagesService,
    private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toastService: NgToastService) {


    // this.profileForm =new FormGroup({
    //   FullName: new FormControl(''), 
    //   CitizenIdentificationNum: new FormControl(''),
    //   DateCitizenIdentification: new FormControl(''),
    //   PlaceCitizen: new FormControl(''),
    //   Gender: new FormControl(''),
    //   Birthday: new FormControl(''),
    //   PlaceOfBirth: new FormControl(''),
    //   Nationality: new FormControl(''),
    //   provinceTHPT: new FormControl(''),

    //   HightSchool: new FormControl(''),
    //   GraduationYear: new FormControl(''),
    //   Phone: new FormControl(''),
    //   LinkFacebook: new FormControl(''),
    //   Majors: new FormControl(''),
    //   Email: new FormControl(''),
    //   Province: new FormControl(''),
    //   District: new FormControl(''),
    //   Commune: new FormControl(''),
    //   privateAddress: new FormControl(''),
    //   NameSponsor1: new FormControl(''),
    //   PhoneNumberSponsor1: new FormControl(''),
    //   EmailSponsor1: new FormControl(''),
    //   NameSponsor2: new FormControl(''),
    //   PhoneNumberSponsor2: new FormControl(''),
    //   EmailSponsor2: new FormControl(''),

    //   CertificateOfGraduation: new FormControl(''),
    //   TemporaryCertificateOfGraduation: new FormControl(''),
    //   StudyRecords: new FormControl(''),
    //   EnglishCertificate: new FormControl(''),
    //   BirthCertificate: new FormControl(''),
    //   PortraitImage: new FormControl(''),
    //   CitizenIdentificationIm: new FormControl(''),
    //   OtherPapers: new FormControl(''),
    // });

    this.uploadForm = this.formBuilder.group({
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



  // ngOnInit(): void {


  //   // this.profileForm.reset();

  // }



  // onFileSelected(event: Event, fileName: string){
  //   // const file = (event.target as HTMLInputElement).files
  //   // this.profileForm.patchValue({[fileName]: file});
  //   // this.profileForm.get(fileName)?.updateValueAndValidity();

  //   // const reader = new FileReader();
  //   // reader.onload = () => {
  //   //   if(fileName === 'CertificateOfGraduation') {
  //   //     this.student.CertificateOfGraduation = reader.result as string;
  //   //   }
  //   // }

  // }

  async confirmEvent(studentId: any, eventId: any, status: any) {

    this.api.confirmEvent(studentId, eventId, status).subscribe(res => {
        console.log(res);
        this.toastService.success({ detail: "Success", summary: "Confirm Success", duration: 3000 });
        this.events();
      } , error => {
        console.log(error);
        this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
      }
    )

  }

  

  async events() {

    const id = this.route.snapshot.params['ID'];
    await this.api.getEventsByStudent(id
    ).subscribe(async res => {

     console.log(res);

     this.eventsByStudent = await res.events;

      
      
    //   console.log(res);
    //   if(this.editStatus == 0 || this.editStatus == 2){
    //     this.uploadForm.disable();
    //   }
      

    //   localStorage.setItem('studentPhone', d.student.Phone);

    //   let data = await { ...d.student };
    //   console.log(data);

    //   let array = await data.ImageFolder.split('\\')


    //   for (let key in data) {
    //     if (data.hasOwnProperty(key)) {
    //       this.uploadForm.get(key)?.setValue(data[key]);
    //     }

    //   }
    //   this.uploadForm.get('Phone')?.disable();

    //   let birthday = new Date(data.Birthday);
    //   console.log(birthday);
    //   let dateCitizen = new Date(data.DateCitizen);
      
    //   this.uploadForm.get('Birthday')?.setValue(moment(birthday).format('dd-MM-yyyy'));
    //   this.uploadForm.get('DateCitizen')?.setValue(moment(dateCitizen).format('dd-MM-yyyy'));

    // },

    //   error => {
    //     console.log("Error", error);
    //     alert("Error");
    //     // this.router.navigateByUrl('/students');
    //   }

  });

  }

  async onSubmit() {
   // lấy lại giá trị cho editStatus
   
    const account: any = localStorage.getItem('account');
    await this.api.getAStudent(JSON.parse(account).Phone
    ).subscribe(async res => {

     

      var d = await JSON.parse(res);
      this.editStatus = d.student.AllowEditing
      
    if(this.editStatus == 0 || this.editStatus == 2) {
      this.toastService.warning({duration: 3000, summary: 'You are not authorized to edit this profile.'});
      return;
    } else {
      
      console.log(this.uploadForm.get('CertificateOfGraduation')?.value);

      //add form group value to form data ignore file
      this.formData.append('FullName', this.uploadForm.get('FullName')?.value);
      this.formData.append('Gender', this.uploadForm.get('Gender')?.value);
      this.formData.append('Birthday', this.uploadForm.get('Birthday')?.value);
      this.formData.append('PlaceOfBirth', this.uploadForm.get('PlaceOfBirth')?.value);
      this.formData.append('Nationality', this.uploadForm.get('Nationality')?.value);
      this.formData.append('CitizenIdentificationNum', this.uploadForm.get('CitizenIdentificationNum')?.value);
      this.formData.append('DateCitizen', this.uploadForm.get('DateCitizen')?.value);
      this.formData.append('PlaceCitizen', this.uploadForm.get('PlaceCitizen')?.value);
      this.formData.append('HightSchool', this.uploadForm.get('HightSchool')?.value);
      this.formData.append('provinceTHPT', this.uploadForm.get('provinceTHPT')?.value);
      this.formData.append('GraduationYear', this.uploadForm.get('GraduationYear')?.value);
      this.formData.append('LinkFacebook', this.uploadForm.get('LinkFacebook')?.value);
      this.formData.append('Email', this.uploadForm.get('Email')?.value);
      this.formData.append('Majors', this.uploadForm.get('Majors')?.value);
    
      this.formData.append('NameSponsor1', this.uploadForm.get('NameSponsor1')?.value);
      this.formData.append('PhoneNumberSponsor1', this.uploadForm.get('PhoneNumberSponsor1')?.value);
      this.formData.append('NameSponsor2', this.uploadForm.get('NameSponsor2')?.value);
      this.formData.append('PhoneNumberSponsor2', this.uploadForm.get('PhoneNumberSponsor2')?.value);
      this.formData.append('EmailSponsor2', this.uploadForm.get('EmailSponsor2')?.value);
      this.formData.append('EmailSponsor1', this.uploadForm.get('EmailSponsor1')?.value);
  
      
      this.formData.append('Address', this.uploadForm.get('Address')?.value);
  
  
  
      console.log(this.formData.get('Majors'));
      console.log(this.formData.get('TemporaryCertificateOfGraduation'));
  
  
      // formData.append('FullName', this.uploadForm.get('FullName')?.value);
      // formData.append('Gender', this.uploadForm.get('Gender')?.value);
      // formData.append('Birthday', this.uploadForm.get('Birthday')?.value);
      // formData.append('PlaceOfBirth', this.uploadForm.get('PlaceOfBirth')?.value);
      // formData.append('Nationality', this.uploadForm.get('Nationality')?.value);
      // formData.append('CitizenIdentificationNum', this.uploadForm.get('CitizenIdentificationNum')?.value);
      // formData.append('DateCitizen', this.uploadForm.get('DateCitizen')?.value);
      // formData.append('PlaceCitizen', this.uploadForm.get('PlaceCitizen')?.value);
      // formData.append('provinceTHPT', this.uploadForm.get('provinceTHPT')?.value);
      // formData.append('HightSchool', this.uploadForm.get('HightSchool')?.value);
      // formData.append('CertificateOfGraduation', this.uploadForm.get('CertificateOfGraduation')?.value);
      // formData.append('TemporaryCertificateOfGraduation', this.uploadForm.get('TemporaryCertificateOfGraduation')?.value);
      // formData.append('StudyRecords', this.uploadForm.get('StudyRecords')?.value);
      // formData.append('EnglishCertificate', this.uploadForm.get('EnglishCertificate')?.value);
      // formData.append('BirthCertificate', this.uploadForm.get('BirthCertificate')?.value);
      // formData.append('PortraitImage', this.uploadForm.get('PortraitImage')?.value);
      // formData.append('CitizenIdentification', this.uploadForm.get('CitizenIdentification')?.value);
  
      // formData.append('OtherPapers', this.uploadForm.get('OtherPapers')?.value);
  
  
      const Id = this.route.snapshot.params['ID']
      console.log(Id);
  
      Swal.fire({
        title: 'Are you sure to edit this student?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.api.handleUpload(Id, this.formData).subscribe(response => {
            // Swal.fire('Saved!', '', 'success')
            this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
              this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
                this.toastService.success({ detail: "Success", summary: "Edit Success", duration: 3000 });
              });
            })
          },
            error => {
              this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
                this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
                  console.log(error);
                  this.toastService.error({ detail: "Error", summary: error.statusText, duration: 3000 });
                });
              })
            }
          );
        }
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        // }
      })
  
      // if(confirm("Are you sure to edit this student?") ){
      //   this.api.handleUpload(Id, this.formData).subscribe(response => {
        
      //     // alert("Thay đổi thông tin thành công");
    
      //     // Reload current page
      //     this.router.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
      //       this.router.navigate([`/students/profilestudent/${this.route.snapshot.params['ID']}`]).then(() => {
              
      //         this.toastService.success({detail:"Edit success", summary:"Success", duration: 3000});
      //       });
    
    
      //       })
          
          
      //   },
      //     error => {
            
      //       alert("Error");
      //       location.reload();
      //     }
      //   );
          
  
      // }
  
      
  
      //   if (this.selectedFiles) {
      //     const file: File | null = this.selectedFiles.item(0);
  
      //     if (file) {
      //       this.currentFile = file;
  
      //       this.api.handleUpload(formData).subscribe({
      //         next: (event: any) => {
      //           console.log(event);
      //         },
      //         error: (err: any) => {
      //           console.log(err);
      //           this.progress = 0;
  
      //           if (err.error && err.error.message) {
      //             this.message = err.error.message;
  
      //           } else {
      //             this.message = 'Could not upload the file!';
      //           }
  
      //           this.currentFile = undefined;
      //         }
      //       });
      //     }
  
      //     this.selectedFiles = undefined;
  
      // }

    }
   
  }, error => {
    console.log(error);
    
  });
  }


  private citis?: HTMLSelectElement;
  private districts?: HTMLSelectElement;
  private wards?: HTMLSelectElement;

  // onFileChange(event: any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.profileForm.get('CertificateOfGraduation')!.setValue(file);
  //   }
  // }

  ngOnInit() {

    this.events();
   
  }

}
