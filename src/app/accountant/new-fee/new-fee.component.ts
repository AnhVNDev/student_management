import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-fee',
  templateUrl: './new-fee.component.html',
  styleUrls: ['./new-fee.component.css']
})
export class NewFeeComponent implements OnInit {
  ngOnInit(): void {
   
  }
 newFeeForm = new FormGroup({
    Fee: new FormControl(''),
  })
  onClickSubmit(fee: any) {}
}
