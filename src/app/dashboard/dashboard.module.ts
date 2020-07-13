import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonMaterialModule } from '../material.module';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';


@NgModule({
  declarations: [DashboardComponent, FieldErrorDisplayComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, CommonMaterialModule
  ]
})
export class DashboardModule { }
