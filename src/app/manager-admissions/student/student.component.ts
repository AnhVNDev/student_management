import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  ngListMajor = ["Chưa chọn ngành", "Công Nghệ Thông Tin", "Quản Trị Kinh Doanh", "Quản Trị Sự Kiện","Quản Trị Truyền Thông", "Quản Trị Sự Kiện", "Thiết Kế Đồ Họa", "Tất Cả"];
  ngLevelEL = ["Chưa Xếp Lớp", "Level 1", "Level 2", "Level 3", "Level 4", "Summit 1", "Summit 2", "Tất Cả"];
  ngSemester = [  "Tất Cả", "Spring Part 1", "Spring Part 2", "Summer Part 1", "Summer Part 2", "Fall Part 1", "Fall Part 2",];
  isShowFilter= false;
constructor(
 private http: HttpClient, private api: ApiService){
    
  }
  
Filter(){
  
}
  
  onSubmit(data: any) {


  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}

