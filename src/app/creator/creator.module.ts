import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorDashboardComponent } from './creator-dashboard/creator-dashboard.component';


@NgModule({
  declarations: [
    CreatorDashboardComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }
