import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorDashboardComponent } from './creator-dashboard/creator-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorDashboardComponent,
    children: [
      { path: '', redirectTo: 'post', pathMatch: 'full' },
      { path: 'dashboard', component: CreatorDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
