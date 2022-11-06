import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { ExamComponent } from './exam/exam.component';
import { StudentComponent } from './student/student.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    HomeComponent,
    SideNavComponent,
    NewAdmissionComponent,
    ExamComponent,
    StudentComponent,
    TimeTableComponent,
    AccountsComponent,
    TeacherComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
