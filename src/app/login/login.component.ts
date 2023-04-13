import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiService } from '../api.service';
import {ToastComponent } from '../toast/toast.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
interface LoginDetails {
    username: string | null,
    password: string | null,
}

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//controller

    uploadedFiles: any[] = [];

    

    onUpload(event: any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        
    }

    ref!: DynamicDialogRef;

    show() {
        this.ref = this.dialogService.open(MyDialogComponent, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe();

        this.ref.onMaximize.subscribe((value) => {
            
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
    
    status: any;
    durationInSeconds = 5;
    constructor(
        private dialogService: DialogService,
        private route: ActivatedRoute,
        private http: HttpClient,
        private api: ApiService,
        private router: Router, private toastService: NgToastService, private toastr: ToastrService) { } //dependency injection

        // showToast() {
        //     this.toastr.success('Success!', 'Toastr Message');
        //   }

        //   showSuccess() {
        //     this.toastr.success('Thành công', 'Thông báo', {
        //       timeOut: 2000,
        //       progressBar: true,
        //       progressAnimation: 'increasing',
        //       closeButton: true,
        //       positionClass: 'toast-top-right'
        //     });
        //   }

        
    ngOnInit(): void {
        this.loginForm.patchValue({
            phone: this.route.snapshot.queryParamMap.get('phone')!,
            password: this.route.snapshot.queryParamMap.get('password')!
          });

          

     }

    //  openSnackBar() {
    //     this._snackBar.openFromComponent(ToastComponent, {
    //       duration: this.durationInSeconds * 1000,
    //     });
    //   }

    loginForm = new FormGroup({
        phone: new FormControl('', [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
    onSubmit(data: any) {
        
        this.api.login(
            data.phone,
            data.password
        ).subscribe(res => {
            // confirm("Đăng nhập thành công");

            var d = JSON.parse(res); //doi tu json sang object
                console.log(d.account.ID);
            const expriesAt = moment().add(d.expiresIn, 'second'); // add de cong them thoi diem hien tai + khoang thoi gian 480s nua thi no se het han
            localStorage.setItem('id_token', d.idToken);
            localStorage.setItem('expires_at', JSON.stringify(expriesAt.valueOf()));

            localStorage.setItem('account', JSON.stringify(d.account));
            
            if(d.account.Role == 0){
                this.toastService.success({detail:"Login success", duration: 3000})
                this.router.navigateByUrl('/admissions');
                
            } else if(d.account.Role == 1){
                this.toastService.success({detail:"Login success", duration: 3000})
                this.router.navigate(['/students']);
            }

            
        
            // luu lai trang trc roi quay lai trang do, sau do xoa di
                // this.router.navigateByUrl('/students');
                // localStorage.setItem('token', res.result);
        },
        
        error => {
            this.toastService.error({detail:"Login failed", duration: 3000})
            const currentUrl = this.router.url;
            this.router.navigate([currentUrl]);
        }
        
        );

    }

    // details: LoginDetails = {
    //     username: null,
    //     password: null,
    // }
    // isValidated(ctrl: NgModel): boolean | null {
    //     var result: boolean | null
    //         = ctrl.valid || (ctrl.pristine && ctrl.untouched)
    //     return result;
    // }
    // getValidationClass(ctrl: NgModel): any {
    //     // solution 1: return a class name as string
    //     if (ctrl.touched && ctrl.value && this.isValidated(ctrl)) {
    //         return 'is-valid';
    //     } else if (!this.isValidated(ctrl)) {
    //         return 'is-invalid';
    //     } else {
    //         return '';
    //     }

    // }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
       
        this.router.navigateByUrl('/login');
    }

    logined() {
        const str = localStorage.getItem('expires_at') || ""; // || " " nghia la neu khong co thi gan cho gia tri rong dung cho const
        if(str == ""){
            return false; //chua login

        }
        const expriesAt = JSON.parse(str);
        return moment().isBefore(moment(expriesAt)); //isBefore kiem tra xem thoi gian hien tai co truoc thoi gian expriesAt hay khong - tra ve true or false
    }




}
