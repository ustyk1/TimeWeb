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
import { PerformanceIndicatorCardComponent } from './components/performance-indicator-card/performance-indicator-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    UserProfileComponent,
    LinkItemComponent,
    HeaderComponent,
    HamburgerToggleComponent,
    PerformanceIndicatorCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
