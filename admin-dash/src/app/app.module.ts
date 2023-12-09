import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AdminSidebarComponent } from './components/admin-dashboard/admin-sidebar/admin-sidebar.component';
import { UsersBaseComponent } from './components/admin-dashboard/admin-sidebar/users-base/users-base.component';
import { ChatsComponent } from './components/admin-dashboard/admin-sidebar/chats/chats.component';
import { AnswersTemplatesComponent } from './components/admin-dashboard/admin-sidebar/answers-templates/answers-templates.component';
import { AnalyticsComponent } from './components/admin-dashboard/admin-sidebar/analytics/analytics.component';
import { ManagemenComponent } from './components/admin-dashboard/admin-sidebar/managemen/managemen.component';
import { DashboardComponent } from './components/admin-dashboard/admin-sidebar/dashboard/dashboard.component';
const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AdminDashboardComponent,
    HeaderComponent,
    AdminSidebarComponent,
    UsersBaseComponent,
    ChatsComponent,
    AnswersTemplatesComponent,
    AnalyticsComponent,
    ManagemenComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    material,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
