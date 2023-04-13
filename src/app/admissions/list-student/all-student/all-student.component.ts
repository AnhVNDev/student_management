import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import { ApiService } from 'src/app/api.service';
import { ImageModalComponent } from 'src/app/students/profile-student/image-modal/image-modal.component';



interface Images {

  CertificateOfGraduation: string,
  TemporaryCertificateOfGraduation: string,
  StudyRecords: string,
  EnglishCertificate: string,
  BirthCertificate: string,
  PortraitImage: string,
  CitizenIdentification: string,
  OtherPapers: string,

}
@Component({
  
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent {

    Id?: string
    students: any = [];
    constructor(private http: HttpClient,
      private api: ApiService,
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private modalService: NgbModal
      ) { }

      selectedYear!: any;
      selectedSemester!: any;
      ngSemester = ["Tất Cả", "Spring Part 1", "Spring Part 2", "Summer Part 1", "Summer Part 2", "Fall Part 1", "Fall Part 2",];
      onYearChange() {
        this.listStudent();
       console.log(this.selectedYear);
       console.log(this.selectedSemester);
      }
    
      onSemesterChange() {
        this.listStudent();
        console.log(this.selectedYear);
       console.log(this.selectedSemester);
      }
   
    // logout(){this.auth.logout();}

    convertSemester(semester: any) {
      switch (semester) {
        case "Spring Part 1":
          return 1;
        case "Spring Part 2":
          return 2;
        case "Summer Part 1":
          return 3;
        case "Summer Part 2":
          return 4;
        case "Fall Part 1":
          return 5;
        case "Fall Part 2":
          return 6;
        default:
          return 0;
      }
    }
  
    listStudent() {
      
      const query = {
        year: 2023,
        semester: 1
      }
    
      //get password from localstorage
      var account: any = localStorage.getItem('account');
      this.Id = JSON.parse(account).ID;
     
      this.api.getAllStuentByAdmission(this.Id, query
      ).subscribe(async res => {
        
        //get data from api res.0
        var data = await JSON.parse(res);
        this.students = data.account;
        console.log(this.students[0].Id);
      },
        
        err => {
          console.log(err); 
        })
    }
  
    
      ngOnInit() {
        this.listStudent();
        
  
      }

      first: number = 0;

    rows: number = 10;

    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
        console.log(event.first);
        console.log(event.rows);``
    }
    
     


}
