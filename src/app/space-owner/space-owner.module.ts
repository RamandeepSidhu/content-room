import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceOwnerRoutingModule } from './space-owner-routing.module';
import { SpaceOwnerDashboardComponent } from './space-owner-dashboard/space-owner-dashboard.component';


@NgModule({
  declarations: [
    SpaceOwnerDashboardComponent
  ],
  imports: [
    CommonModule,
    SpaceOwnerRoutingModule
  ]
})
export class SpaceOwnerModule { }
