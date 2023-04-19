import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { FormProfileComponent } from './admissions/form-profile/form-profile.component';

import { ProfileStudentComponent } from './students/profile-student/profile-student.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoAccountComponent } from './admissions/auto-account/auto-account.component';
import { Moment } from 'moment';
import { NewAutoAccountComponent } from './admissions/new-auto-account/new-auto-account.component';
import { Interceptor } from './Interceptor';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultProfileComponent } from './default-profile/default-profile.component';
import { ListStudentComponent } from './admissions/list-student/list-student.component';
import { AccountantComponent } from './accountant/accountant.component';
import { SwitcherBodyComponent } from './switcher-body/switcher-body.component';

import { FeeVerificationComponent } from './accountant/fee-verification/fee-verification.component';
import { EditTypeFeeComponent } from './accountant/edit-type-fee/edit-type-fee.component';
import { NewFeeComponent } from './accountant/new-fee/new-fee.component';
import { HeaderComponent } from './header/header.component';
import { LogoGWComponent } from './logo-gw/logo-gw.component';
import { ManagerAmissionsComponent } from './manager-admissions/manager-admissions.component';
import { StudentComponent } from './manager-admissions/student/student.component';
import { FinishtestComponent } from './manager-admissions/test-ta/finishtest/finishtest.component';
import { WaitEnglishComponent } from './manager-admissions/test-ta/wait-english/wait-english.component';
import { ListEnglishTestWaitComponent } from './manager-admissions/test-ta/list-english-test-wait/list-english-test-wait.component';
import { TestTaComponent } from './manager-admissions/test-ta/test-ta.component';
import { EligibilityComponent } from './admissions/list-student/eligibility/eligibility.component';
import { AllStudentComponent } from './admissions/list-student/all-student/all-student.component';
import { ProfileOutDateComponent } from './admissions/list-student/profile-out-date/profile-out-date.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageModalComponent } from './students/profile-student/image-modal/image-modal.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { NgToastModule } from 'ng-angular-popup';
import { NgxConfirmBoxModule } from 'ngx-confirm-box';
import { ToastComponent } from './toast/toast.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { EventComponent } from './event/event.component';
import { AddStudentEventComponent } from './event/add-student-event/add-student-event.component';
import { EmailComponent } from './email/email.component';

import { EmailBoxComponent } from './email/email-box/email-box.component';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EmailReadComponent } from './email/email-read/email-read.component';
import { NewEmailComponent } from './email/new-email/new-email.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ListStudentInEventComponent } from './event/list-student-in-event/list-student-in-event.component';
import { CheckinCheckoutComponent } from './event/checkin-checkout/checkin-checkout.component';
import { AddPaymentComponent } from './accountant/add-payment/add-payment.component';
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FinancialVerificationComponent } from './admissions/financial-verification/financial-verification.component';
import { ConfirmEventsComponent } from './students/confirm-events/confirm-events.component';
import { ScholarshipProposalComponent } from './admissions/form-profile/scholarship-proposal/scholarship-proposal.component';



// Import PrimeNG modules
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
// import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { GMapModule } from 'primeng/gmap';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { QuillModule } from 'ngx-quill';
import { MyDialogComponent } from './login/my-dialog/my-dialog.component'
import { RequestVerificationFeeComponent } from './accountant/request-verification-fee/request-verification-fee.component';
import { ModalEditRequestComponent } from './accountant/request-verification-fee/modal-edit-request/modal-edit-request.component'
import { ApiService } from './api.service';
import { MessagesService } from './message/messages.service';
import { ChatAdmissionComponent } from './admissions/chat-admission/chat-admission.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionsComponent,
    StudentsComponent,
    FormProfileComponent,
    
    ProfileStudentComponent,
    LoginComponent,
    AutoAccountComponent,
    NewAutoAccountComponent,
    ResetPasswordComponent,
    FooterComponent,
    DefaultProfileComponent,
    ListStudentComponent,
    AccountantComponent,
    SwitcherBodyComponent,
    ConfirmEventsComponent,


    FeeVerificationComponent,
    EditTypeFeeComponent,
    NewFeeComponent,

    HeaderComponent,
    LogoGWComponent,
    ManagerAmissionsComponent,
    ImageModalComponent,
    StudentComponent,
    FinishtestComponent,
    WaitEnglishComponent,
    ListEnglishTestWaitComponent,
    TestTaComponent,
    EligibilityComponent,
    AllStudentComponent,
    ProfileOutDateComponent,
    ToastComponent,

    EventComponent,

    AddStudentEventComponent,
    EmailComponent,


    EmailBoxComponent,
    EmailReadComponent,
    NewEmailComponent,
    ChatboxComponent,
    ListStudentInEventComponent,
    CheckinCheckoutComponent,
    AddPaymentComponent,
    FinancialVerificationComponent,
    ScholarshipProposalComponent,
    MyDialogComponent,
    
    RequestVerificationFeeComponent,
    ModalEditRequestComponent,
    ChatAdmissionComponent,
    MessagesComponent,
    DashboardComponent,
    

  ],
  imports: [

    AvatarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    // CodeHighlighterModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ContextMenuModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DockModule,
    DragDropModule,
    DropdownModule,
    DynamicDialogModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ImageModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    AnimateModule,
    CardModule,
    ConfirmPopupModule,
    QuillModule,

    // SocketIoModule.forRoot(config),
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule, HttpClientJsonpModule,
    BrowserModule, HttpClientModule, FormsModule, CommonModule,
    AppRoutingModule, ReactiveFormsModule, ModalModule, NgbModule, NgxImageZoomModule, ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      progressBar: true,
      closeButton: true,
      enableHtml: true,
      extendedTimeOut: 1000,
      easeTime: 300,
      tapToDismiss: true,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      },



    }), MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,

    NgToastModule, NgxConfirmBoxModule, ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), FullCalendarModule
  ],
  providers: [
    { provide: [HTTP_INTERCEPTORS], useClass: Interceptor, multi: true },
    DialogService,
    DynamicDialogRef,
    ApiService,
    MessagesService
  ],
  entryComponents: [
    MyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }