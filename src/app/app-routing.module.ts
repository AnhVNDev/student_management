import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AutoAccountComponent } from './admissions/auto-account/auto-account.component';
import { FormProfileComponent } from './admissions/form-profile/form-profile.component';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';
import { ProfileStudentComponent } from './students/profile-student/profile-student.component';
import { StudentsComponent } from './students/students.component';
import { StudentGuard } from './student.guard';
import { NewAutoAccountComponent } from './admissions/new-auto-account/new-auto-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ListStudentComponent } from './admissions/list-student/list-student.component';
import { AccountantComponent } from './accountant/accountant.component';

import { FeeVerificationComponent } from './accountant/fee-verification/fee-verification.component';
import { EditTypeFeeComponent } from './accountant/edit-type-fee/edit-type-fee.component';
import { NewFeeComponent } from './accountant/new-fee/new-fee.component';
import { TestTaComponent } from './manager-admissions/test-ta/test-ta.component';
import { ListEnglishTestWaitComponent } from './manager-admissions/test-ta/list-english-test-wait/list-english-test-wait.component';
import { WaitEnglishComponent } from './manager-admissions/test-ta/wait-english/wait-english.component';
import { FinishtestComponent } from './manager-admissions/test-ta/finishtest/finishtest.component';
import { ManagerAmissionsComponent } from './manager-admissions/manager-admissions.component';
import { StudentComponent } from './manager-admissions/student/student.component';
import { EligibilityComponent } from './admissions/list-student/eligibility/eligibility.component';
import { AllStudentComponent } from './admissions/list-student/all-student/all-student.component';
import { ProfileOutDateComponent } from './admissions/list-student/profile-out-date/profile-out-date.component';
import { EventComponent } from './event/event.component';
import { EmailBoxComponent } from './email/email-box/email-box.component';
import { EmailReadComponent } from './email/email-read/email-read.component';
import { NewEmailComponent } from './email/new-email/new-email.component';
import { EmailComponent } from './email/email.component';
import { AddStudentEventComponent } from './event/add-student-event/add-student-event.component';
import { ListStudentInEventComponent } from './event/list-student-in-event/list-student-in-event.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { CheckinCheckoutComponent } from './event/checkin-checkout/checkin-checkout.component';
import { FinancialVerificationComponent } from './admissions/financial-verification/financial-verification.component';
import { ConfirmEventsComponent } from './students/confirm-events/confirm-events.component';
import { ScholarshipProposalComponent } from './admissions/form-profile/scholarship-proposal/scholarship-proposal.component';
import { RequestVerificationFeeComponent } from './accountant/request-verification-fee/request-verification-fee.component';
import { ChatAdmissionComponent } from './admissions/chat-admission/chat-admission.component';
import { MessagesComponent } from './messages/messages.component';




const routes: Routes = [
  // { path: '', loadChildren: () => import('./app.module').then(m=>m.AppModule)},
  // { path: 'students', loadChildren: () => import('./app.module').then(m=>m.AppModule)},
  // { path: 'admissions', loadChildren: () => import('./app.module').then(m=>m.AppModule)},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'students', component: StudentsComponent,
    children: [
      { path: 'profilestudent/:ID', component: ProfileStudentComponent },
      { path: 'boxchat', component: MessagesComponent },
      { path: 'confirmevents/:ID', component: ConfirmEventsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword/:Phone', component: ResetPasswordComponent },


  {
    path: 'admissions', component: AdmissionsComponent,
    children: [
      {

        path: 'liststudent', component: ListStudentComponent,

        

        children: [
          { path: 'profileoutdate', component: ProfileOutDateComponent },
          { path: 'profileoutformprofiledate/:Id', component: ProfileStudentComponent },
          { path: 'eligibility', component: EligibilityComponent },
          { path: 'allstudent', component: AllStudentComponent },

        ]
      },
      {path: 'chat-admission', component: ChatAdmissionComponent},
      { path: 'scholarship/:Id', component: ScholarshipProposalComponent },
      { path: 'liststudent/formprofile/:Id', component: FormProfileComponent },
      {
        path: 'formprofile', component: FormProfileComponent,
        children: [
          
        ]
      },
      { path: 'event', component: EventComponent },
      { path: 'liststudent/formprofile/:Id', component: ProfileStudentComponent, },
      { path: 'formprofile', component: FormProfileComponent },
      { path: 'event', component: EventComponent },


      { path: 'addstudentevent/:id', component: AddStudentEventComponent },
      { path: 'liststudentevent', component: ListStudentInEventComponent },
      { path: 'checkincheckout', component: CheckinCheckoutComponent },
      { path: 'chatbox', component: ChatboxComponent },
      {
        path: 'email', component: EmailComponent,
        children: [
          { path: 'emailbox', component: EmailBoxComponent },
          { path: 'emailread', component: EmailReadComponent },
          { path: 'newemail', component: NewEmailComponent },
        ]
      },
      { path: 'financialverification', component: FinancialVerificationComponent },
      {
        path: 'registeraccount', component: AutoAccountComponent,
        children: [
          { path: 'newaccount', component: NewAutoAccountComponent },
        ]
      },

    ]
  },

  { path: 'liststudent/formprofile/:Id', component: ProfileStudentComponent, },
  { path: 'formprofile', component: FormProfileComponent },
  { path: 'event', component: EventComponent },

  { path: 'addstudentevent', component: AddStudentEventComponent },
  { path: 'liststudentevent', component: ListStudentInEventComponent },
  { path: 'chatbox', component: ChatboxComponent },



  {
    path: 'email', component: EmailComponent,
    children: [
      { path: 'emailbox', component: EmailBoxComponent },
      { path: 'emailread', component: EmailReadComponent },
      { path: 'newemail', component: NewEmailComponent },
    ]
  },

  {
    path: 'registeraccount', component: AutoAccountComponent,
    children: [
      { path: 'newaccount', component: NewAutoAccountComponent },
    ]
  },


  {
    path: 'accountant', component: AccountantComponent,
    children: [

      { path: 'feeverification', component: FeeVerificationComponent },
      {
        path: 'edittypefee', component: EditTypeFeeComponent,
        children: [
          { path: 'newfee', component: NewFeeComponent }
        ]
      },
      { path: 'boxchat', component: ChatboxComponent },
      {path: 'requestfee', component: RequestVerificationFeeComponent},

    ]
  },
  {
    path: 'manageradmission', component: ManagerAmissionsComponent,
    children: [
      { path: 'student', component: StudentComponent },
      {
        path: 'test', component: TestTaComponent, children: [
          { path: 'liststudenttest', component: ListEnglishTestWaitComponent },
          { path: 'studentwait', component: WaitEnglishComponent },
          { path: 'finishtest', component: FinishtestComponent }
        ]
      },
    ]

  },

  


]



@NgModule({
  imports: [CommonModule,
    [RouterModule.forRoot(routes, {
      // scrollPositionRestoration: 'top',
      // anchorScrolling: 'enabled',
      // initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
