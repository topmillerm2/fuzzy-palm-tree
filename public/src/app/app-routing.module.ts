import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'new/poll',
    pathMatch: 'full',
    component: CreateComponent,
    children: []
  },
  {
    path: 'poll/:id',
    pathMatch: 'full',
    component: VoteComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
