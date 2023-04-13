import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';

@Component({
  
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  ngListMajor = ["Chưa chọn ngành", "Công Nghệ Thông Tin", "Quản Trị Kinh Doanh", "Quản Trị Sự Kiện","Quản Trị Truyền Thông", "Quản Trị Sự Kiện", "Thiết Kế Đồ Họa", "Tất Cả"];
  ngLevelEL = ["Chưa Xếp Lớp", "Level 1", "Level 2", "Level 3", "Level 4", "Summit 1", "Summit 2", "Tất Cả"];
  ngSemester = ["Tất Cả", "Spring Part 1", "Spring Part 2", "Summer Part 1", "Summer Part 2", "Fall Part 1", "Fall Part 2"];
  isShowFilter= false;
  isFilterXacNhan = false;
  isFilterPhi = false;
  isFilterHoso = false;
  ngListSource = ["Online", "Direct", "Database", "Referral", "Internals", "Online Mass", "Other"];
  ngFilterYear = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014];
  ngDropdownYear?= this.ngFilterYear[0];

  currentTab: string = 'allstudent';

  setActiveTab(tabName: string) {
    this.currentTab = tabName;
  }

  isTabActive(tabName: string) {
    return this.currentTab === tabName;
  }
Filter(){
  
}
  
  onSubmit(data: any) {


  }


  Id?: string
  students: any = [];


  selectedEnglishLevels: any[] = [];
  selectedSources: any[] = [];

  semesters = ['1', '2', '3'];
  years = ['2020', '2021', '2022'];
  selectedYear!: any;
  selectedSemester!: any;
  

  onChangeEnglishLevel(event: any) {
    if (event.target.checked) {
      this.selectedEnglishLevels.push(event.target.value);
    } else {
      let index = this.selectedEnglishLevels.indexOf(event.target.value);
      this.selectedEnglishLevels.splice(index, 1);
    }
  }

  onChangeSource(event: any) {
    if (event.target.checked) {
      this.selectedSources.push(event.target.value);
    } else {
      let index = this.selectedSources.indexOf(event.target.value);
      this.selectedSources.splice(index, 1);
    }
  }

  filter() {
    let filter = '';
    if (this.selectedEnglishLevels.length > 0) {
      filter += 'englishLevels=' + this.selectedEnglishLevels.join(',') + '&';
    }
    if (this.selectedSources.length > 0) {
      filter += 'sources=' + this.selectedSources.join(',') + '&';
    }
    filter += 'semester=' + this.selectedSemester + '&';
    filter += 'year=' + this.selectedYear;

    this.http.get('/students?' + filter).subscribe(data => {
      this.students = data;
    });
  }


  constructor(private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
    ) { }
 
  // logout(){this.auth.logout();}

  listStudent() {
    const query = {
      year: this.selectedYear,
      semester: this.selectedSemester
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
      console.log(this.selectedYear);
      console.log(this.selectedSemester);

    }

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

   


}
