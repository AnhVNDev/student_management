import { Component } from '@angular/core';

@Component({
  selector: 'app-list-student-in-event',
  templateUrl: './list-student-in-event.component.html',
  styleUrls: ['./list-student-in-event.component.css']
})
export class ListStudentInEventComponent {
  ngSemester = [  "Tất Cả", "Spring Part 1", "Spring Part 2", "Summer Part 1", "Summer Part 2", "Fall Part 1", "Fall Part 2",];

}
