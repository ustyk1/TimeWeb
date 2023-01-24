import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LinkItemComponent } from './components/side-bar/link-item/link-item.component';
import { HeaderComponent } from './components/header/header.component';
import { HamburgerToggleComponent } from './components/header/hamburger-toggle/hamburger-toggle.component';
import { PerformanceCardComponent } from './components/performance-card/performance-card.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { DataService } from './services/data.service';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { DynamicCardComponent } from './components/common/dynamic-card/dynamic-card.component';
import { TasksCardComponent } from './components/tasks-card/tasks-card.component';
import { EmployeesStatsCardComponent } from './components/employees-stats-card/employees-stats-card.component';
import { PrimaryInputComponent } from './components/profile-edit-card/primary-input/primary-input.component';
import { ProfileEditCardComponent } from './components/profile-edit-card/profile-edit-card.component';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    UserProfileComponent,
    LinkItemComponent,
    HeaderComponent,
    HamburgerToggleComponent,
    PerformanceCardComponent,
    ActivityCardComponent,
    SpinnerComponent,
    DynamicCardComponent,
    TasksCardComponent,
    EmployeesStatsCardComponent,
    PrimaryInputComponent,
    ProfileEditCardComponent,
    UserProfileComponent,
    UserProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
