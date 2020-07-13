import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './home/charts.component';
import { ChartPerformanceComponent } from './chart-performance/chart-performance.component';

const routes: Routes = [
  { path: '', redirectTo: 'statistics' },
  { path: 'statistics', component: ChartsComponent },

  { path: 'performance', component: ChartPerformanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
