import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/api.service';

@Component({

  templateUrl: './edit-type-fee.component.html',
  styleUrls: ['./edit-type-fee.component.css']
})
export class EditTypeFeeComponent {
  
  years: number[] = []
  fees: any[] = []

  ngFilterYear = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014];
  ngDropdownYear?= this.ngFilterYear[0];


  feeForm!: FormGroup;
 
  // openModal(imageUrl: string) {
  //   const modalRef = this.modalService.open(ImageModalComponent, { size: 'lg' });
  //   modalRef.componentInstance.imageUrl = imageUrl;
  // }


  


  create() {

  }

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toastService: NgToastService) {

      this.feeForm = this.formBuilder.group({
        Id: '',
        FeeType: '',
        Fee: '',
        SchoolYear: '',
        
      });

      


      const currentYear = new Date().getFullYear() + 5;
      this.years = Array.from({length: 20}, (_, i) => currentYear - i);


  } //dependency injection

  save(Id: string) {
    const formData = new FormData();
    for(let key in this.feeForm.value) {
      
      formData.append(key, this.feeForm.value[key]);
    }
    
    
      this.api.saveFee(Id, formData).subscribe(async res => {
        console.log(res);
        await location.reload();
        if(res.message == "Add Fee Successfully") {
          this.toastService.success({detail: "Add Success", summary: 'Enquiry Updated', duration: 3000})
          alert("Add fee successfully");

        } else {
          this.toastService.success({detail: "Update Success", summary: 'Enquiry Updated', duration: 3000})
          alert("Update fee successfully");
        }
        this.toastService.success({detail: "Updated Success", summary: 'Enquiry Updated', duration: 3000})
        
      },
      err => {
        console.log(err);
        alert("Error");
        location.reload();
      }
      );

    
    
   
  }


  edit(Id: string) {
    console.log(Id);
    if(Id != "" && Id != undefined && Id != null) {

    this.api.getFeeById(Id
      ).subscribe(async res => {
        
          
          const data = {...res.fee}
          
          console.log(data)
          this.feeForm.get('Id')!.setValue(data.Id);
          this.feeForm.get('Fee')!.setValue(data.Fee);
          this.feeForm.get('FeeType')!.setValue(data.FeeType);
          console.log(this.feeForm.get('FeeType')!.value);
          this.feeForm.get('SchoolYear')!.setValue(data.SchoolYear);
          this.feeForm.get('Id')!.setValue(Id);
          
          
          console.log(this.feeForm.value.Id);
  
  
      
      },
  
        error => {
          console.log("Error", error);
          alert("Error");

         
        }
  
      );
    } else {
      

      
    }
    
  }

  


  deleteFee (Id: string): void {
    if(confirm("Are you sure to delete this fee?") == true) {
      this.api.deleteFee(Id
        ).subscribe(async res => {
    
          console.log(res);
    
          await location.reload();
          alert("Xóa thành công");
          
          this.toastService.success({detail: "Delete Success", summary: 'Enquiry Updated', duration: 3000})
        },
    
          error => {
            console.log("Error", error);
            alert("Error");
          }
    
        );

    }

   


  }

  allFees() {
    
    this.api.getAllFees(
    ).subscribe(async res => {
      
      // const d = JSON.parse(res);

          
      let data = await {...res.fee};
      
      
      
      
      for (let key in data) {
        await this.fees.push(data[key]);
      }
      console.log(this.fees[0]);

    
    },

      error => {
        console.log("Error", error);
        alert("Error");
        // this.router.navigateByUrl('/students');
      }

    );

  }
   
  
    async onSubmit() {
      const formData = new FormData();

      
      for(let key in this.feeForm.value){
        formData.append(key, this.feeForm.get(key)!.value);
      }
      const Id = this.route.snapshot.params['ID']
      console.log(Id);

      this.api.handleUpload(Id, formData).subscribe(response => {
        console.log(response);
        // alert("Thay đổi thông tin thành công");
       
        location.reload();
        this.toastService.success({detail: "Success", summary: 'Enquiry Updated', duration: 3000})

      },
        error => {
          console.log("Error", error);
          alert("Error");
          location.reload();
        }
      );

  
    }
  
    ngOnInit() {
      


      this.allFees();
      
    }
    visible: boolean = false;
    showDialogCreate(){
      this.visible = true;
    }
  
}
