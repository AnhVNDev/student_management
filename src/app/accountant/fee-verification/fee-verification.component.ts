import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/api.service';


interface Student {
  Id: string;
  FullName: string;
  Phone: string;

}

@Component({
  
  templateUrl: './fee-verification.component.html',
  styleUrls: ['./fee-verification.component.css']
})
export class FeeVerificationComponent implements OnInit {

 

  ngFilterStatus = ["Tất cả", "Đã nộp đầy đủ phí ", "Thiếu phí giữ chỗ ", "Thiếu phí xét tuyển ", "Chưa nộp phí"];
  ngDropdownStatus?= "Tất cả";

  ngFilterSemester = ["fall", "spring", "summer"];
  ngDropdownSemester?= "all";

  ngFilterYear = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014];
  ngDropdownYear?= this.ngFilterYear[0];

  ngFilterName = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Văn C"];
  ngDropdownName?= "Nguyễn Văn A";


  payments: any[] = []
  years: number[] = []
  fees: any[] = []


  paymentForm!: FormGroup;
 
  // openModal(imageUrl: string) {
  //   const modalRef = this.modalService.open(ImageModalComponent, { size: 'lg' });
  //   modalRef.componentInstance.imageUrl = imageUrl;
  // }

  searchForm: FormGroup;
  searchControl!: FormControl;
  filteredStudents: any[] = [];

  students: any = []
  selectedStudent: object = {};
  searchText = ''

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toastService: NgToastService) {

      this.paymentForm = this.formBuilder.group({
        Id: '',
        FeeType: '',
        Fee: '',
        SchoolYear: '',
        
      });

      this.searchControl = formBuilder.control(null);
    this.searchForm = formBuilder.group({
      searchControl: this.searchControl
    });

    
    const currentYear = new Date().getFullYear() + 5;
    this.years = Array.from({length: 20}, (_, i) => currentYear - i);


} //dependency injection

  addPayment() {
    this.api.getAllStuents().subscribe((data: any) => {
      this.students = data.students;

      //get Phone and fullname assign to students
      for (let i = 0; i < data.students.length; i++) {
        this.students[i] ={
          FullName: data.students[i].FullName,
          Phone: data.students[i].Phone
        } 
      }
      console.log(this.students);
    //    this.searchControl.valueChanges.subscribe(() => {
    //   this.onSearch();
    // });
    });

    // this.searchControl.valueChanges.subscribe(() => {
    //   this.onSearch();
    // });
  }
  


  onSearch() {
    if(this.searchControl.value == "") {
      this.filteredStudents = [];
      return;
    }
    
     
    const searchText = this.searchControl.value.toLowerCase();

        this.filteredStudents = this.students.filter((student : any) => student.Phone.toLowerCase().includes(searchText)).slice(0, 5);
    
    
  }


  deletePayment(id: any) {
    this.api.deleteFee(id).subscribe((data: any) => {
      console.log(data);
      location.reload();
    })
  }


  selectStudent(student: Student) {
    // (keydown.arrowDown)="onArrowDown()" (keydown.enter)="onEnter()"
   
    this.filteredStudents = [];
    
    console.log(student.FullName);
    
    //set value for searchControl
    this.searchControl.patchValue(student.FullName + " - " + student.Phone);
    //set value for input display
    
  }

  create() {

  }

  save(Id: string) {
    const formData = new FormData();
    for(let key in this.paymentForm.value) {
      
      formData.append(key, this.paymentForm.value[key]);
    }
    
    
      this.api.saveFee(Id, formData).subscribe(async res => {
        console.log(res);
        await location.reload();
        if(res.message == "Add Fee Successfully") {
          this.toastService.success({detail: "Add Success", summary: 'Enquiry Updated', duration: 3000})
          alert("Add fee successfully");

        } else {
          this.toastService.success({detail: "Update Success", summary: 'Enquiry Updated', duration: 3000})
          alert("Update fee successfully");
        }
        this.toastService.success({detail: "Updated Success", summary: 'Enquiry Updated', duration: 3000})
        
      },
      err => {
        console.log(err);
        alert("Error");
        location.reload();
      }
      );

  }


  edit(Id: string) {
    console.log(Id);
    if(Id != "" && Id != undefined && Id != null) {

    this.api.getFeeById(Id
      ).subscribe(async res => {
        
          
          const data = {...res.fee}
          
          console.log(data)
          this.paymentForm.get('Id')!.setValue(data.Id);
          this.paymentForm.get('Fee')!.setValue(data.Fee);
          this.paymentForm.get('FeeType')!.setValue(data.FeeType);
          console.log(this.paymentForm.get('FeeType')!.value);
          this.paymentForm.get('SchoolYear')!.setValue(data.SchoolYear);
          this.paymentForm.get('Id')!.setValue(Id);
          console.log(this.paymentForm.value.Id);
  
      },
  
        error => {
          console.log("Error", error);
          alert("Error");
        }
  
      );
    } else {
      
    }
    
  }

  
  deleteFee (Id: string): void {
    if(confirm("Are you sure to delete this fee?") == true) {
      this.api.deleteFee(Id
        ).subscribe(async res => {
    
          console.log(res);
    
          await location.reload();
          alert("Xóa thành công");
          
          this.toastService.success({detail: "Delete Success", summary: 'Enquiry Updated', duration: 3000})
    
        },
    
          error => {
            console.log("Error", error);
            alert("Error");
           
          }
    
        );

    }

  }


  getAllPayment() {
    this.api.getAllPayment().subscribe((data: any) => {
      this.payments = data.payment;

      //asign student for each payment
      for (let i = 0; i < data.payment.length; i++) {
        this.api.getStudentById(data.payment[i].StudentId).subscribe((data: any) => {
          this.payments[i].Student = data.student;
          console.log(this.payments[i].Student);
        })
      }
      console.log(this.payments);
    }, error => {
      console.log(error);
    })
  }

    async onSubmit() {
      const formData = new FormData();

      
      for(let key in this.paymentForm.value){
        formData.append(key, this.paymentForm.get(key)!.value);
      }

      const Id = this.route.snapshot.params['ID']
      console.log(Id);
      this.api.handleUpload(Id, formData).subscribe(response => {
        console.log(response);
        // alert("Thay đổi thông tin thành công");
       
        location.reload();
        this.toastService.success({detail: "Success", summary: 'Enquiry Updated', duration: 3000})

      },
        error => {
          console.log("Error", error);
          alert("Error");
          location.reload();
        }
      );

  
    }
  
    ngOnInit() {
      this.getAllPayment()
      
      // this.uploadForm = this.formBuilder.group({
      //   FullName: null,
      //   Gender: null,
      //   Birthday: null,
      //   PlaceOfBirth: null,
      //   Nationality: null,
      //   CitizenIdentificationNum: null,
      //   DateCitizen: null,
      //   PlaceCitizen: null,
      //   provinceTHPT: null,
      //   HightSchool: null,
      //   CertificateOfGraduation: null,
      //   TemporaryCertificateOfGraduation: null,
      //   StudyRecords: null,
      //   EnglishCertificate: null,
      //   BirthCertificate: null,
      //   PortraitImage: null,
      //   CitizenIdentification: null,
      //   OtherPapers: null,
      // });

    
      
    }

    visible: boolean | undefined;

    showDialog() {
        this.visible = true;
    }

    visibleFee: boolean | undefined;
    showDialogAddFee(){
      this.visibleFee = true;
      this.addPayment();
    }

    first: number = 0;

    rows: number = 10;

    onPageChange(event: { first: number; rows: number; }) {
        this.first = event.first;
        this.rows = event.rows;
    }

}
