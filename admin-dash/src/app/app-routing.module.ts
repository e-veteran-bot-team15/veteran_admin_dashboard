import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersBaseComponent } from './components/admin-dashboard/admin-sidebar/users-base/users-base.component';
import { ChatsComponent } from './components/admin-dashboard/admin-sidebar/chats/chats.component';
import { AnswersTemplatesComponent } from './components/admin-dashboard/admin-sidebar/answers-templates/answers-templates.component';
import { AnalyticsComponent } from './components/admin-dashboard/admin-sidebar/analytics/analytics.component';
import { ManagemenComponent } from './components/admin-dashboard/admin-sidebar/managemen/managemen.component';
import { DashboardComponent } from './components/admin-dashboard/admin-sidebar/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  {
    path: '',
    component: AdminDashboardComponent,
    // canActivate: [RoleGuard],
    children: [
      { path: 'users', component: UsersBaseComponent },
      { path: 'chats', component: ChatsComponent },
      { path: 'templates', component: AnswersTemplatesComponent },
      { path: 'analitic', component: AnalyticsComponent },
      { path: 'management', component: ManagemenComponent },
      { path: 'dashboard', component: DashboardComponent}
    ]
  },
  { path: '**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
