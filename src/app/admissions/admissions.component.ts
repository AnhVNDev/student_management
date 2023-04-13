import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {
  Id?: string
  constructor(private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) { }
  ngOnInit(): void {
    
    var account: any = localStorage.getItem('account');
    this.Id = JSON.parse(account).ID;
    
  }

  async onNavigateToChatbox() {
    
    await this.router.navigate(['/admissions/chat-admission'])
    window.location.reload()
  }


}
