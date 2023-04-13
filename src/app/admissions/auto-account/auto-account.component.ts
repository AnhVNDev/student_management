import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from 'src/app/api.service';


interface Account {

  FullName: string | null,
  Email: string | null,
  Phone: string | null,
  Password: string | null,
  Addmission: string | null,
  LeadSoure: string | null,

}
interface Students {

  FullName: string | null,
  Gender: string | null,
  GraduationYear: string | null,
  Birthday: string | null,
  PlaceOfBirth: string | null,
  Nationality: string | null,
  CitizenIdentificationNum: string | null,
  DateCitizenIdentification: string | null,
  PlaceCitizen: string | null,
  LinkFacebook: string | null,
  Email: string | null,
  PhoneNumberSponsor1: string | null,
  NameSponsor1: string | null,
  PhoneNumberSponsor2: string | null,
  NameSponsor2: string | null,
  EmailSponsor1: string | null,
  EmailSponsor2: string | null,

}


@Component({
  templateUrl: './auto-account.component.html',
  styleUrls: ['./auto-account.component.css']
})


export class AutoAccountComponent implements OnInit {
 
  ngOptionsSourceinfor = ["Online", "Direct", "Database", "Referal", "Internals", "Online Mass", "Cộng Hưởng", "Khác"];
  ngDropdownSourceinfo = "Online";
  public aElement?: boolean = true;
  constructor(private http: HttpClient,
    private api: ApiService,
    private router: Router) {
   
    this.aElement = true;
    // router.events.subscribe((val) => {
      
    //   // if (val instanceof NavigationEnd) {
    //   //   console.log(val.url);
    //   // }

    //   this.activateDiv(this.router.url);
    // });
  }

  onclick() {
    this.aElement = !this.aElement;
    
   
  }

  CreateNewAccount(data: any) {
    //get password from localstorage
    var account: any = localStorage.getItem('account');
    var phone = JSON.parse(account).Phone;
    console.log("dsadsds" + phone);

    this.account = {
      FullName: data.FullName,
      Email: data.Email,
      Password: data.Password,
      Phone: data.Phone,
      Addmission: JSON.parse(account).ID,
      LeadSoure: data.Sourceinfor,
    }





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
      console.log("hii");
      this.api.createNewAccount(this.account
      ).subscribe(res => {
        
        var d = JSON.parse(res); //doi tu json sang object
        const helper = new JwtHelperService();
        console.log("okeee", d.account)
        const decoedToken = helper.decodeToken(d.account);
        console.log("okeee", d.account)
        console.log("d", decoedToken);
        
        alert("Tạo tài khoản thành công. Đã gửi Email cho sinh viên");
        
        // this.router.navigateByUrl('/students/profilestudent');
        this.router.navigateByUrl('/admissions');
      },
  
        error => {
            console.log("Error", error);
            alert("Error");
            this.router.navigateByUrl('/admissions/registeraccount');
        }
  
      );
    
   
  }
  ngOnInit() {
    
   
  }

  accountForm = new FormGroup({
    Phone: new FormControl(''),
    FullName: new FormControl(''),
    Name: new FormControl(''),
    Sourceinfor: new FormControl(''),
    Email: new FormControl(''),
    Addmission: new FormControl(''),
    Password: new FormControl(''),
  }
  )

  account: Account = {
    FullName: null,
    Email: null,
    Phone: null,
    Password: null,
    Addmission: null,
    LeadSoure: null
  };

  student: Students = {
    FullName: null,
    Gender: null,
    Birthday: null,
    PlaceOfBirth: null,
    Nationality: null,
    CitizenIdentificationNum: null,
    DateCitizenIdentification: null,
    PlaceCitizen: null,
    GraduationYear: null,
    LinkFacebook: null,
    Email: null,
    PhoneNumberSponsor1: null,
    NameSponsor1: null,
    PhoneNumberSponsor2: null,
    NameSponsor2: null,
    EmailSponsor1: null,
    EmailSponsor2: null,
  };
  
  // ngAfterViewInit(): void {
  //   this.aElement = this.child.aElementNewAccount
    
  // }
  

  activateDiv(url: string) {
    if (url == '/admissions/registeraccount') {
      this.aElement = true;
    }
    this.aElement = false;
  }

  // Reload parent component when needed
  reloadParent() {
    this.ngOnInit();
  }
  
}
