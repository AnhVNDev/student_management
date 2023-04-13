import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  account: any = localStorage.getItem('account');
  phone = JSON.parse(this.account).Phone;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router) {

    var account: any = localStorage.getItem('account');
    var phone = JSON.parse(account).Phone;
    console.log("dsadsds" + phone);
  } 

  

}
