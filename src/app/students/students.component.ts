import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { LoginComponent } from '../login/login.component';
import { MessagesService } from '../message/messages.service';

@Component({

  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  account: any;
  ID: any;
  profileStatus!: number;
  payments: any[] = [];
  constructor(
    private api: ApiService,
    private scriptLoader: MessagesService,
    private route: ActivatedRoute,
    // private login: LoginComponent
    ) {

  }
  ngOnInit(): void {

    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/fullcalendar/js/main.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/bootstrap.bundle.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/jquery.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/simplebar/js/simplebar.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/metismenu/js/metisMenu.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/pace.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/app.js');
   
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/chartjs/js/Chart.min.js');

    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/chartjs/js/Chart.extension.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/apexcharts-bundle/js/apexcharts.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/index.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/list-student.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/datatable/js/jquery.dataTables.min.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/plugins/datatable/js/dataTables.bootstrap5.min.js');
    

    
    
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/table-datatable.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/app-emailread.js');
    this.scriptLoader.loadScript2('assets/main-files/snacked/ltr/assets/js/app-chat-box.js');
    this.account = localStorage.getItem('account');
    console.log("fgzfd"+ JSON.parse(this.account).Phone)
    this.api.getAStudent(JSON.parse(this.account).Phone
      ).subscribe(res => {
       
  
        var d = JSON.parse(res); 
        this.payments = d.payments
        console.log(d.payments);
        this.profileStatus = d.student.EnoughProfile
        console.log(d.student);
        this.ID = d.student.Id
    // logout() { this.login.logout(); }
  
    // logined() { return this.login.logined()}
  },

  error => {
    console.log("Error", error);
    alert("Error");
    // this.router.navigateByUrl('/students');
  }

);

}
  
    }
    
    
    

   


