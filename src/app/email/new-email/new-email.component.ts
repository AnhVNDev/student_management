import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/api.service';
import * as XLSX from 'xlsx';

@Component({
  
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {
  emailForm!: FormGroup;
  // attachments: File[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private api: ApiService,
    private router: Router, private toastService: NgToastService) {
      this.emailForm = this.fb.group({
        to: new FormControl('', Validators.required),
        subject: new FormControl('', Validators.required),
        text: new FormControl('', Validators.required),
        emailFile: new FormControl(null),
        attachments: new FormControl(null)
      });
     }
  sendEmail(): void {
    // const formData = new FormData();
    
    this.getEmailsFromString(this.emailForm.get('to')?.value);
    
    const data = {
      to: this.emailList,
      subject: this.emailForm.get('subject')?.value,
      text: this.emailForm.get('text')?.value,
     
    };
    console.log(data);
    // formData.append('to', this.emailList);
    // formData.append('subject', this.emailForm.get('subject')?.value);
    // formData.append('text', this.emailForm.get('text')?.value);
    // for (let i = 0; i < this.attachments.length; i++) {
    //   formData.append('attachments[]', this.attachments[i], this.attachments[i].name);
    // }
    
    this.api.sendEmail(data).subscribe(response => {
      console.log(response);
  
        this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/admissions/email/newemail']).then(() => {
            
            this.toastService.success({detail:"Send success", summary:"Success", duration: 3000});
          });
  
  
          })
     
      console.log(response);
      this.emailForm.reset();
      // this.attachments = [];

    }, error => {
      this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admissions/email/newemail']).then(() => {
          
          this.toastService.error({detail:"Send fail", summary:"Fail", duration: 3000});
        });


        })
    });

    
    
  }
  ngOnInit(): void {
    

  }

  // ngOnInit() {
  //   this.emailForm = this.fb.group({
  //     to: ['', Validators.required],
  //     subject: ['', Validators.required],
  //     body: ['', Validators.required],
  //     attachments: [null, Validators.required]
  //   });
  // }

  // sendEmail() {
  //   const formData = new FormData();
  //   formData.append('to', this.emailForm.get('to')?.value);
  //   formData.append('subject', this.emailForm.get('subject')?.value);
  //   formData.append('body', this.emailForm.get('body')?.value);
  //   for (let i = 0; i < this.attachments.length; i++) {
  //     formData.append('attachments[]', this.attachments[i], this.attachments[i].name);
  //   }
  //   this.http.post('/api/sendEmail', formData).subscribe(response => {
  //     console.log(response);
  //     this.emailForm.reset();
  //     this.attachments = [];
  //   });
  // }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   this.emailForm.get('attachments')?.setValue(file);
  // }

  // onDrop(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const files = event.dataTransfer.files;
  //   for (let i = 0; i < files.length; i++) {
  //     this.attachments.push(files[i]);
  //   }
  //   this.emailForm.get('attachments')?.setValue(this.attachments);
  // }

  // onDragOver(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  // }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.readExcelFile(file);

    console.log(this.emailList);
  }

  getEmailsFromString(inputString: string): string[] {
    // Tách các địa chỉ email bằng cách sử dụng regex
    const regex = /(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)/g;
    const matches = inputString.match(regex);
  
    // Loại bỏ dấu cách đầu và cuối (nếu có)
    const trimmedMatches = matches?.map((match) => match.trim()) || [];

    //add trimmedMatches to emailList
    this.emailList?.push(...trimmedMatches);
  
    return trimmedMatches;
  }

  emailList?: string[] = [];

  readExcelFile(file: File): void {
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (event: any) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // lấy sheet đầu tiên 
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as []; // XLSX.utils.sheet_to_json(worksheet, { header: 1 }) để chuyển đổi dữ liệu từ worksheet sang mảng các dòng dữ liệu, bỏ qua dòng 1 (header).
     
      for(let i = 0; i < rows.length; i++) {
        console.log(rows[i][0]);
        if(rows[i][0] != undefined) {
          this.emailList?.push(rows[i][0]);
        }
        
        
      }
    };
    fileReader.readAsBinaryString(file); //fileReader.readAsBinaryString(file) để đọc nội dung của file Excel. Phương thức này sẽ đọc nội dung của file Excel và kích hoạt sự kiện onload khi quá trình đọc hoàn tất.
  }
  

}
