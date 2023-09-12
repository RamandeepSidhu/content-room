import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceOwnerDashboardComponent } from './space-owner-dashboard/space-owner-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceOwnerDashboardComponent,
    children: [
      { path: '', redirectTo: 'post', pathMatch: 'full' },
      { path: 'dashboard', component: SpaceOwnerDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceOwnerRoutingModule { }
