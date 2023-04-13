import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit  {
  

  constructor(public ref: DynamicDialogRef) {}

  ngOnInit() {
      
  }

  selectProduct() {
      this.ref.close();
  }

  

}
