import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
 { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsAppModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
