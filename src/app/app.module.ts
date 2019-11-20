import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
//import { PusherService } from '../../node_modules/pusher-js';//pusher
//import { PusherService } from './pusher.service';
import { PusherServiceService } from './services/pusher-service.service';

import { UserRegistrationService } from './services/user-registration.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './Registration/user-registration/user-registration.component';
import { SchApplyForm1Component } from './Scholarship/sch-apply-form1/sch-apply-form1.component';
import { AddExpensesComponent } from './Financial/add-expenses/add-expenses.component';
import { AddIncomeComponent } from './Financial/add-income/add-income.component';
import { FinancialManagementMainComponent } from './Financial/financial-management-main/financial-management-main.component';
import { GenerateReportComponent } from './Financial/generate-report/generate-report.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { CreatProjectComponent } from './ProjectManagement/creat-project/creat-project.component';
import { EnrollProjectComponent } from './ProjectManagement/enroll-project/enroll-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { ScholarshipHeaderComponent } from './Scholarship/scholarship-header/scholarship-header.component';
import { UploadPrograssReportComponent } from './Scholarship/upload-prograss-report/upload-prograss-report.component';
import { ProjectManagementHeaderComponent } from './ProjectManagement/project-management-header/project-management-header.component';
import { FinanceHeaderComponent } from './Financial/finance-header/finance-header.component';
import { Auth1Guard } from './Guard/auth1.guard';
import { TokenIntercepterService } from './services/token-intercepter.service';
import { ResetMailSendComponent } from './ResetPassword/reset-mail-send/reset-mail-send.component';
import { ResetpassComponent } from './ResetPassword/resetpass/resetpass.component';
import { ActivateComponent } from './Registration/activate/activate.component';
import { AddSibilingComponent } from './Scholarship/add-sibiling/add-sibiling.component';
import { MentorListComponent } from './ChatApp/mentor-list/mentor-list.component';
import { MentoringHeaderComponent } from './ChatApp/mentoring-header/mentoring-header.component';
import { MentorReqComponent } from './ChatApp/mentor-req/mentor-req.component';
import { MentorAcceptComponent } from './ChatApp/mentor-accept/mentor-accept.component';
import { MentorAcceptStudentComponent } from './ChatApp/mentor-accept-student/mentor-accept-student.component';
import { MyMentorComponent } from './ChatApp/my-mentor/my-mentor.component';
import { MyMentorsComponent } from './ChatApp/my-mentors/my-mentors.component';
import { MyStudentsComponent } from './ChatApp/my-students/my-students.component';
import { MyStudentComponent } from './ChatApp/my-student/my-student.component';
import { ChatBoxComponent } from './ChatApp/chat-box/chat-box.component';
import { ChatMsgComponent } from './ChatApp/chat-msg/chat-msg.component';
import { StudentGuardGuard } from './Guard/student-guard.guard';
import { ProfileComponent } from './Profile/profile/profile.component';
import { ProfileImgComponent } from './Profile/profile-img/profile-img.component';
import { ProfileDetailsComponent } from './Profile/profile-details/profile-details.component';
import { ProfileHeaderComponent } from './Profile/profile-header/profile-header.component';
import { ProfilePasswordResetComponent } from './Profile/profile-password-reset/profile-password-reset.component';

//password and confirm password matching
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { SchViewsComponent } from './Scholarship/sch-views/sch-views.component';
import { SchViewComponent } from './Scholarship/sch-view/sch-view.component';
import { SchDetailsComponent } from './Scholarship/sch-details/sch-details.component';
import { RejectedSchListComponent } from './Scholarship/rejected-sch-list/rejected-sch-list.component';
import { RejectedSchComponent } from './Scholarship/rejected-sch/rejected-sch.component';
import { ApprovedSchListComponent } from './Scholarship/approved-sch-list/approved-sch-list.component';
import { ApprovedSchComponent } from './Scholarship/approved-sch/approved-sch.component';
import { SuggestionListComponent } from './Scholarship/Sponsor/suggestion-list/suggestion-list.component';
import { SuggestionComponent } from './Scholarship/Sponsor/suggestion/suggestion.component';
import { SchDetailsForSponsorComponent } from './Scholarship/Sponsor/sch-details-for-sponsor/sch-details-for-sponsor.component';
import { WelcomeSchComponent } from './Scholarship/welcome-sch/welcome-sch.component';
import { YourStudentComponent } from './Scholarship/Sponsor/your-student/your-student.component';
import { ToApplyProjectComponent } from './ProjectManagement/to-apply-project/to-apply-project.component';
import { DialogComponent } from './ProjectManagement/dialog/dialog.component';
import { SettingHeaderComponent } from './Setting/setting-header/setting-header.component';
import { EditRoleComponent } from './Setting/edit-role/edit-role.component';
import { EditProjectComponent } from './Setting/edit-project/edit-project.component';
import { DeactivateDialogBoxComponent } from './Setting/deactivate-dialog-box/deactivate-dialog-box.component';
import { DialogBoxComponent } from './Setting/edit-project/dialog-box/dialog-box.component';
import { ExpiredReportUploadComponent } from './Scholarship/expired-report-upload/expired-report-upload.component';
import { ExpiredReportUploadListComponent } from './Scholarship/expired-report-upload-list/expired-report-upload-list.component';
import { SchSummaryComponent } from './Scholarship/sch-summary/sch-summary.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CommProfileComponent } from './Profile/comm-profile/comm-profile.component';
import { DeleteFinanceComponent } from './Financial/delete-finance/delete-finance.component';
import { PdfcreateComponent } from './Financial/pdfcreate/pdfcreate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    SchApplyForm1Component,
    AddExpensesComponent,
    AddIncomeComponent,
    FinancialManagementMainComponent,
    GenerateReportComponent,
    DashboadComponent,
    CreatProjectComponent,
    EnrollProjectComponent,
    DashboardNewComponent,
    ScholarshipHeaderComponent,
    UploadPrograssReportComponent,
    ProjectManagementHeaderComponent,
    FinanceHeaderComponent,
    ResetMailSendComponent,
    ResetpassComponent,
    ActivateComponent,
    AddSibilingComponent,
    MentorListComponent,
    MentoringHeaderComponent,
    MentorReqComponent,
    MentorAcceptComponent,
    MentorAcceptStudentComponent,
    MyMentorComponent,
    MyMentorsComponent,
    MyStudentsComponent,
    MyStudentComponent,
    ChatBoxComponent,
    ChatMsgComponent,
    ProfileComponent,
    ProfileImgComponent,
    ProfileDetailsComponent,
    ProfileHeaderComponent,
    ProfilePasswordResetComponent,
    ConfirmEqualValidatorDirective,
    SchViewsComponent,
    SchViewComponent,
    SchDetailsComponent,
    RejectedSchListComponent,
    RejectedSchComponent,
    ApprovedSchListComponent,
    ApprovedSchComponent,
    SuggestionListComponent,
    SuggestionComponent,
    SchDetailsForSponsorComponent,
    WelcomeSchComponent,
    YourStudentComponent,
    ToApplyProjectComponent,
    DialogComponent,
    SettingHeaderComponent,
    EditRoleComponent,
    EditProjectComponent,
    DeactivateDialogBoxComponent,
    DialogBoxComponent,
    ExpiredReportUploadComponent,
    ExpiredReportUploadListComponent,
    SchSummaryComponent,
    CommProfileComponent,
    DeleteFinanceComponent,
    PdfcreateComponent, //password validaator


  ],
  entryComponents: [AddSibilingComponent, DialogComponent, DeactivateDialogBoxComponent, DialogBoxComponent, CommProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //PusherService
  ],
  providers: [
    UserRegistrationService,
    PusherServiceService,
    Auth1Guard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    },
    StudentGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    },
    ConfirmEqualValidatorDirective, {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true
    },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
