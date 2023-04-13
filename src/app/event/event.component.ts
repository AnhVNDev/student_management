import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../api.service';

interface Event {
  id: string,
  title: string,
          start: string,
          end: string,
          editable: boolean,
}


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];

  handleEventClick(arg: EventClickArg) {
    // code xử lý sự kiện click ở đây
    console.log('Event clicked:', arg.event.id);
    this.router.navigate(['/admissions/addstudentevent', arg.event.id]);
  }

  getAllEvent(): any {
    this.api.getAllevents().subscribe((data: any) => {
    
      for (let i = 0; i < data.events.length; i++) {
      //   let startDateString = data.events[i].StartDate;
      // let startDate = new Date(startDateString);
      // // Chuyển đổi sang múi giờ GMT+7
      // startDate.setHours(startDate.getHours() + 7);

      // let endDateString = data.events[i].EndDate;
      // let endDate = new Date(endDateString);
      // // Chuyển đổi sang múi giờ GMT+7
      // endDate.setHours(startDate.getHours() + 7);

     

     
        this.events.push({
          id: data.events[i].Id,
          title: data.events[i].Name,
          start: data.events[i].StartDate,
          end: data.events[i].EndDate,
          editable: true,
        });
      }
      console.log(this.events);

      this.calendarOptions.events = this.events;
    }, (error: any) => {
      console.log(error);
    });
  }
  ngOnInit(): void {

    this.getAllEvent();
    
      
  }
  ngSemester = [  "Tất Cả", "Spring Part 1", "Spring Part 2", "Summer Part 1", "Summer Part 2", "Fall Part 1", "Fall Part 2",];
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: NgToastService) {

  } 
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin], // sử dụng plugin dayGridPlugin
      initialView: 'dayGridMonth', // hiển thị lịch theo tháng
      eventBackgroundColor: '#ff0000', // màu nền của sự kiện
      events: [
        // {
        //   title: 'Sự kiện 1',
        //   start: '2023-03-10', // ngày bắt đầu sự kiện
        //   end: '2023-03-15' // ngày kết thúc sự kiện
        // },
        // {
        //   title: 'Sự kiện 2',
        //   start: '2023-03-15', // ngày bắt đầu sự kiện
        //   end: '2023-03-17' // ngày kết thúc sự kiện
        // }
      ],
      eventClick: this.handleEventClick.bind(this)
    
  };
}
