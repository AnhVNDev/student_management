import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/api.service';

// interface Student {
//   id: string;
//   FullName: string;
//   Majors: string;
//   Addmission: string;
//   Email: string;
//   selecte: false;
// }


@Component({
  selector: 'app-add-student-event',
  templateUrl: './add-student-event.component.html',
  styleUrls: ['./add-student-event.component.css']
})
export class AddStudentEventComponent implements OnInit {
  isShowFilter= false;
  isFilterXacNhan = false;
  isFilterPhi = false;
  isFilterHoso = false;

  parentSelector : boolean = false;

  listStudent: any[] = [];

  listStudentEvent: any[] = [];
  
  
  ngSemester = [  "Tất Cả", "Spring Part 1", "Spring Part 2", "Summer Part 1", "Summer Part 2", "Fall Part 1", "Fall Part 2",];

  constructor(
    
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private api: ApiService,
    private router: Router, private toastService: NgToastService) {
      // this.emailForm = this.fb.group({
      //   to: new FormControl('', Validators.required),
      //   subject: new FormControl('', Validators.required),
      //   text: new FormControl('', Validators.required),
      //   emailFile: new FormControl(null),
      //   attachments: new FormControl(null)
      // });
     }
  ngOnInit(): void {
    this.getStudentsToEvent();
    this.getStudentEvent()

    //  // Tạo ra một mảng FormControl tương ứng với mỗi item
    //  const formControls = this.items.map(() => new FormControl(false));

    //  // Tạo ra FormGroup và FormArray và đưa các FormControl vào FormArray
    //  this.checkboxForm = this.fb.group({
    //    checkboxes: new FormArray(formControls)
    //  });
    
  }
  addStudentsToEvent(){
    if(confirm('Are you sure to add these students to this event?')){
      const id = this.route.snapshot.paramMap.get('id') as string;
      const listAdd = this.listStudent.filter((item) => item.select == true);
      console.log(listAdd)
      console.log(this.route.snapshot.params['id'])
      this.api.addStudentsToEvent(id, listAdd).subscribe((res: any) => {
        
        this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/admissions/addstudentevent/${this.route.snapshot.params['id']}`]).then(() => {
            
            this.toastService.success({detail: "Add students to event successfully", duration: 3000, summary: "Success", position: "top-right"})
          });
          })
        
       
      }, (err) => {
        this.toastService.error({detail:"Add students to event failed", duration: 3000, summary: "Error", position: "top-right"})
      })
    }
    
  }

  deleteStudentToEvent(id: string){
    if(confirm('Are you sure to delete this student from this event?')){
      const idEvent = this.route.snapshot.paramMap.get('id') as string;
      const student = this.listStudentEvent.filter((item) => item.Id == id);
      console.log(student)
      this.api.deleteStudentsToEvent(idEvent, student).subscribe((res: any) => {
        
        this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/admissions/addstudentevent/${this.route.snapshot.params['id']}`]).then(() => {
            
            this.toastService.success({detail: "Delete students to event successfully", duration: 3000, position: "top-right"})
          });
          })
        
       
      }, (err) => {
        this.toastService.error({detail:"Delete students to event failed", duration: 3000, summary: "Error", position: "top-right"})
      })
    }

  }

  onChange(event: any){
    const Id = event.target.value;
    const isChecked = event.target.checked;
    console.log(isChecked)
    console.log(this.listStudent)
    this.listStudent = this.listStudent.map((item) => {
      if (item.Id == Id) {
        item.select = isChecked;
        this.parentSelector ==false
        return item;
      }
      if(Id == -1) {
        item.select = this.parentSelector;
        return item

      }
      return item;
    });

    console.log(this.listStudent)
    
  }
  checkboxForm!: FormGroup;
  items: any[] = [];
  // checkedItems: Item[] = [];
  selectedItems: any[] = [];

  // selectAll(isChecked: boolean) {
  //   this.selectedItems = []; // clear the selected items array
  //   this.items.forEach(item => item.isSelected = isChecked);
  // }

  // onItemSelect(item: any, isChecked: boolean) {
  //   item.isSelected = isChecked;
  //   if (isChecked) {
  //     this.selectedItems.push(item);
  //   } else {
  //     const index = this.selectedItems.indexOf(item);
  //     if (index >= 0) {
  //       this.selectedItems.splice(index, 1);
  //     }
  //   }
  //   // this.updateMasterCheckbox();
  // }
  


  
  onSubmit() {
    // // Lấy ra FormArray checkboxes và sử dụng phương thức getRawValue để lấy ra mảng các giá trị của các checkbox đã chọn
    // const checkboxes = this.checkboxForm.get('checkboxes') as FormArray;
    // const checkedItems = checkboxes.getRawValue().map((value, index) => {
    //   if (value) {
    //     return this.items[index];
    //   }
    // }).filter(item => item);

    // // Lưu trữ các giá trị của các checkbox đã chọn vào mảng checkedItems
    // this.checkedItems = checkedItems;
    // console.log(this.checkedItems);
  }

  getStudentEvent(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    console.log(id);
    
    this.api.getStudentEvent(id).subscribe(response => {
      
      response.students.forEach((element: any) => {
        element.select = false;
        this.listStudentEvent.push(element);
      });

      console.log(this.listStudentEvent);
  
        // this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/admissions/email/newemail']).then(() => {
            
        //     this.toastService.success({detail:"Send success", summary:"Success", duration: 3000});
        //   });
  
  
        //   })
     
      console.log(response);
      // this.emailForm.reset();
      // this.attachments = [];

    }, error => {
      console.log(error);
      this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admissions/event']).then(() => {
          
          this.toastService.error({detail: error.error.message, summary:"Error", duration: 3000});
        });


        })
    });
  

  }
  getStudentsToEvent(): void {
    // const formData = new FormData();
    
    // this.getEmailsFromString(this.emailForm.get('to')?.value);
    
    // const data = {
    //   to: this.emailList,
    //   subject: this.emailForm.get('subject')?.value,
    //   text: this.emailForm.get('text')?.value,
     
    // };
  
    // formData.append('to', this.emailList);
    // formData.append('subject', this.emailForm.get('subject')?.value);
    // formData.append('text', this.emailForm.get('text')?.value);
    // for (let i = 0; i < this.attachments.length; i++) {
    //   formData.append('attachments[]', this.attachments[i], this.attachments[i].name);
    // }
    const id = this.route.snapshot.paramMap.get('id') as string;
    console.log(id);
    
    this.api.getStudentsToEvent(id).subscribe(response => {
      console.log(response);
      response.students.forEach((element: any) => {
        element.select = false;
        this.listStudent.push(element);
      });
  
        // this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/admissions/email/newemail']).then(() => {
            
        //     this.toastService.success({detail:"Send success", summary:"Success", duration: 3000});
        //   });
  
  
        //   })
     
      console.log(response);
      // this.emailForm.reset();
      // this.attachments = [];

    }, error => {
      console.log(error);
      this.router.navigateByUrl('/admissions', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admissions/event']).then(() => {
          
          this.toastService.error({detail: error.error.message, summary:"Error", duration: 3000});
        });


        })
    });
  }


}
