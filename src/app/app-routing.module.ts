import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './Registration/user-registration/user-registration.component';
import { AddExpensesComponent } from './Financial/add-expenses/add-expenses.component';
import { AddIncomeComponent } from './Financial/add-income/add-income.component';
import { FinancialManagementMainComponent } from './Financial/financial-management-main/financial-management-main.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { CreatProjectComponent } from './ProjectManagement/creat-project/creat-project.component';
import { GenerateReportComponent } from './Financial/generate-report/generate-report.component';
import { EnrollProjectComponent } from './ProjectManagement/enroll-project/enroll-project.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { UploadPrograssReportComponent } from './Scholarship/upload-prograss-report/upload-prograss-report.component';
import { ProjectManagementHeaderComponent } from './ProjectManagement/project-management-header/project-management-header.component';
import { FinanceHeaderComponent } from './Financial/finance-header/finance-header.component';
import { ResetMailSendComponent } from './ResetPassword/reset-mail-send/reset-mail-send.component';
import { ResetpassComponent } from './ResetPassword/resetpass/resetpass.component';
import { ActivateComponent } from './Registration/activate/activate.component';
import { MentoringHeaderComponent } from './ChatApp/mentoring-header/mentoring-header.component';

//chat app and mentor
import { MentorListComponent } from './ChatApp/mentor-list/mentor-list.component';
import { MentorReqComponent } from './ChatApp/mentor-req/mentor-req.component';
import { MentorAcceptComponent } from './ChatApp/mentor-accept/mentor-accept.component';
import { MentorAcceptStudentComponent } from './ChatApp/mentor-accept-student/mentor-accept-student.component';
import { MyMentorComponent } from './ChatApp/my-mentor/my-mentor.component';
import { MyMentorsComponent } from './ChatApp/my-mentors/my-mentors.component';
import { MyStudentsComponent } from './ChatApp/my-students/my-students.component';
import { ChatBoxComponent } from './ChatApp/chat-box/chat-box.component';
import { ProfileComponent } from './Profile/profile/profile.component';

//profile
import { ProfilePasswordResetComponent } from './Profile/profile-password-reset/profile-password-reset.component';
import { ProfileDetailsComponent } from './Profile/profile-details/profile-details.component';
import { ProfileHeaderComponent } from './Profile/profile-header/profile-header.component';
import { ProfileImgComponent } from './Profile/profile-img/profile-img.component';

//scholarship
import { ScholarshipHeaderComponent } from './Scholarship/scholarship-header/scholarship-header.component';
import { SchApplyForm1Component } from './Scholarship/sch-apply-form1/sch-apply-form1.component';
import { SchViewsComponent } from './Scholarship/sch-views/sch-views.component';
import { RejectedSchListComponent } from './Scholarship/rejected-sch-list/rejected-sch-list.component';
import { ApprovedSchListComponent } from './Scholarship/approved-sch-list/approved-sch-list.component';
import { SuggestionListComponent } from './Scholarship/Sponsor/suggestion-list/suggestion-list.component';
import { SchDetailsForSponsorComponent } from './Scholarship/Sponsor/sch-details-for-sponsor/sch-details-for-sponsor.component';
import { WelcomeSchComponent } from './Scholarship/welcome-sch/welcome-sch.component';
import { ExpiredReportUploadListComponent } from './Scholarship/expired-report-upload-list/expired-report-upload-list.component';
import { SchSummaryComponent } from './Scholarship/sch-summary/sch-summary.component';

//setting
import { SettingHeaderComponent } from './Setting/setting-header/setting-header.component';
import { EditRoleComponent } from './Setting/edit-role/edit-role.component';
import { EditProjectComponent } from './Setting/edit-project/edit-project.component';

import { Auth1Guard } from './Guard/auth1.guard';
import { StudentGuardGuard } from './Guard/student-guard.guard';
import { SchDetailsComponent } from './Scholarship/sch-details/sch-details.component';

//financial
import { DeleteFinanceComponent } from './Financial/delete-finance/delete-finance.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetMailSendComponent },
  { path: 'reset/:token', component: ResetpassComponent },
  { path: '', component: LoginComponent },
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path: 'active/:token', component: ActivateComponent },
  { path: 'dash2', component: DashboardNewComponent, canActivate: [Auth1Guard] },

  { path: 'addExpence', component: AddExpensesComponent },
  { path: 'addIncome', component: AddIncomeComponent },
  {
    path: 'dash2',
    component: DashboardNewComponent,
    canActivate: [Auth1Guard],
    children: [
      {
        path: 'setting',
        component: SettingHeaderComponent,
        children: [
          {
            path: 'editrole',
            component: EditProjectComponent
          },{
            path: 'editproject',
            component: EditRoleComponent
          },
          {
            path: 'profileResetPass',
            component: ProfilePasswordResetComponent
          }
        ]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'profileImg',
            component: ProfileImgComponent
          },
          {
            path: '',
            component: ProfileDetailsComponent
          },
          {
            path: 'profileDetals',
            component: ProfileDetailsComponent
          },
          {
            path: 'profileResetPass',
            component: ProfilePasswordResetComponent
          }
        ]
      },
      {
        path: 'mentHeader',
        component: MentoringHeaderComponent,
        children: [
          {
            path: '',
            component: MentorListComponent
          },
          {
            path: 'mentorringStudentList',
            component: MentorAcceptComponent
          },
          {
            path: 'myMentors',
            component: MyMentorsComponent
          },
          {
            path: 'myStudents',
            component: MyStudentsComponent
          },
          {
            path: 'chats',
            component: ChatBoxComponent
          },
          {
            path: 'mentorList',
            component: MentorListComponent,
            children: [
              {
                path: 'mentorReq',
                component: MentorReqComponent
              }
            ]
          }
        ]
      },
      {
        path: 'schHeared',
        component: ScholarshipHeaderComponent,
        children: [
          {
            path: '',
            component: WelcomeSchComponent
          },
          {
            path: 'schApplyForm1',
            component: SchApplyForm1Component
          },
          {
            path: 'upProgRepo',
            component: UploadPrograssReportComponent
          },
          {
            path: 'newSchList',
            component: SchViewsComponent
          },
          {
            path: 'schDetails',
            component: SchDetailsComponent
          },
          {
            path: 'rjcSchs',
            component: RejectedSchListComponent
          },
          {
            path: 'aprSchs',
            component: ApprovedSchListComponent
          },
          {
            path: 'schSuggestion',
            component: SuggestionListComponent
          },
          {
            path: 'schDetailsForSponsor',
            component: SchDetailsForSponsorComponent
          },
          {
            path: 'schExpReport',
            component: ExpiredReportUploadListComponent
          },
          {
            path: 'schSummary',
            component: SchSummaryComponent
          }

        ]
      },
      {
        path: 'projectHeared',
        component: ProjectManagementHeaderComponent,
        children: [
          {
            path: '',
            component: CreatProjectComponent
          },
          {
            path: 'createproject',
            component: CreatProjectComponent
          }
        ]
      },
      {
        path: 'financeHeared',
        component: FinanceHeaderComponent,
        children: [
          {
            path: 'financialManagement',
            component: FinancialManagementMainComponent
          },
          {
            path: 'generateReport',
            component: GenerateReportComponent
          },
          {
            path: 'expenses',
            component: AddExpensesComponent
          },
          {
            path: 'income',
            component: AddIncomeComponent
          },
          {
            path: 'delFin',
            component: DeleteFinanceComponent
          },
          {
            path: '',
            component: AddIncomeComponent
          }
        ]
      },
      {
        path: 'enrollProject',
        component: EnrollProjectComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
