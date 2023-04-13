import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { LoginComponent } from './login/login.component';
import { MessagesService } from './message/messages.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor( private scriptLoader: MessagesService
    // private login: LoginComponent
    
    ) {

  }
  ngOnInit(): void {
    this.scriptLoader.loadScript2('path/to/your/script.js')

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
    
  }

  // loadScript(src: string): void {
  //   const script = this.renderer.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = src;
  //   this.renderer.appendChild(this.document.body, script);
  // }


  ngAfterViewInit(): void {

    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/fullcalendar/js/main.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/bootstrap.bundle.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/jquery.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/simplebar/js/simplebar.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/metismenu/js/metisMenu.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/pace.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/app.js');
   
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/chartjs/js/Chart.min.js');

    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/chartjs/js/Chart.extension.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/apexcharts-bundle/js/apexcharts.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/index.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/list-student.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/datatable/js/jquery.dataTables.min.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/plugins/datatable/js/dataTables.bootstrap5.min.js');
    

    
    
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/table-datatable.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/app-emailread.js');
    // this.loadScript('assets/main-files/snacked/ltr/assets/js/app-chat-box.js');



    const reviewListScrollbar  = new PerfectScrollbar('.review-list');
    const chatTalkScrollbar  = new PerfectScrollbar('.chat-talk');
    
  }
  // logout() { this.login.logout(); }

  // logined() { return this.login.logined()}
  


}
