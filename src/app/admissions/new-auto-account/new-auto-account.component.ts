import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AutoAccountComponent } from '../auto-account/auto-account.component';

@Component({
  templateUrl: './new-auto-account.component.html',
  styleUrls: ['./new-auto-account.component.css']
})
export class NewAutoAccountComponent implements OnInit{
  
  public link? : string;
  constructor(private router: Router) {
    this.link =  window.location.href
  this.aElement = true;
  }
  public aElement?: boolean = true;
  activateDiv(url: string) {
    if (url == window.location.href) {
      this.aElement = false;
    }
    this.aElement = true;
  }

  ngOnInit(): void {
   
  }
  //   // Reload parent component
 
  //  }
  
 

 

  // constructor(private router: Router) {
  //   router.events.subscribe((val) => {
  //     // if (val instanceof NavigationEnd) {
  //     //   console.log(val.url);
  //     // }

  //     this.activateDiv(this.router.url);
  //   });
  // }

  // activateDiv(url: string) {
  //   if (url == '/admissions/registeraccount/newaccount') {
  //     this.aElementNewAccount = false;
  //   }
  //   this.aElementNewAccount = true;
  // }

}
