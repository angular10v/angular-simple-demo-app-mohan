import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './home/charts.component';
import { CommonMaterialModule } from '../material.module';
import { ChartPerformanceComponent } from './chart-performance/chart-performance.component';


@NgModule({
  declarations: [ChartsComponent, ChartPerformanceComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    CommonMaterialModule,
    ChartsModule
  ]
})
export class ChartsAppModule { }
