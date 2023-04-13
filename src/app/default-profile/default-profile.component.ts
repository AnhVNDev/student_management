import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-profile',
  templateUrl: './default-profile.component.html',
  styleUrls: ['./default-profile.component.css']
})
export class DefaultProfileComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router) { } //dependency injection

    profileForm = new FormGroup({
      FullName: new FormControl('',),
      CitizenIdentificationNum: new FormControl('', ), // TODO
      Gender: new FormControl('',),
      Birthday: new FormControl('',),
      provinceTHPT: new FormControl('',), // TODO
      districtTHPT: new FormControl('',), // TODO
      communeTHPT: new FormControl('',),  // TODO
      HightSchool: new FormControl('',),
      GraduationYear: new FormControl('',),
      Phone: new FormControl('',),
      LinkFacebook: new FormControl('',),
      Majors: new FormControl('',), // TODO
      Email: new FormControl('',),
      Province: new FormControl('',), // TODO
      District: new FormControl('',), // TODO
      Commune: new FormControl('',),  // TODO
      privateAddress: new FormControl('',), // TODO
      NameFather: new FormControl('',),
      PhoneNumberFather: new FormControl('',),
      EmailFather: new FormControl('',),
      NameMother: new FormControl('',),
      PhoneNumberMother: new FormControl('',),
      EmailMother: new FormControl('',),
      SponsorName:  new FormControl('',),
      SponsorPhone: new FormControl('',), // TODO
      EmailSponsor: new FormControl('',), 
      CertificateOfGraduation: new FormControl('',),
      TemporaryCertificateOfGraduation: new FormControl('',),
      StudyRecords: new FormControl('',),
      EnglishCertificate: new FormControl('',),
      BirthCertificate: new FormControl('',),
      PortraitImage:  new FormControl('',),
      CitizenIdentificationIm:  new FormControl('',),
      OtherPapers:  new FormControl('',),
  
    })
  ngOnInit(): void {
    
  }

  profile() {

    //get password from localstorage
    var account: any = localStorage.getItem('account');
    var phone = JSON.parse(account).Phone;


    // if(this.loginForm.invalid){
    //     return false;
    // } 
    // truyen du lieu vao form
    // console.log(data.phone, data.password);
    // this.router.navigateByUrl('/students');

    // return true;
    // console.log(
    //  this.resetPasswordForm.value);
    // if (this.resetPasswordForm.value.oldPassword != oldPw) {
      
    //   alert("Mật khẩu cũ không đúng");
    //   return false;
    // }
    // else if (this.resetPasswordForm.value.newPassword != this.resetPasswordForm.value.reNewPassword) {
    //   alert("Mật khẩu mới không trùng khớp");
    //   return false;
    // }
    // else {
      this.api.resetPassword(
      ).subscribe(res => {
  
  
        var d = JSON.parse(res); //doi tu json sang object
        console.log("dsadsds" + d.toString());
        alert("Đổi mật khẩu thành công");
        
        this.router.navigateByUrl('/students');
        
        
        // this.router.navigateByUrl('/students');
  
        // luu lai trang trc roi quay lai trang do, sau do xoa di
        // this.router.navigateByUrl('/students');
        // localStorage.setItem('token', res.result);
      },
  
        // error => {
        //     console.log("Error", error);
        //     alert("Error");
        //     this.router.navigateByUrl('/students');
        // }
  
      );
      return true;
    }

 


}
