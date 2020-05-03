import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '', redirectTo: '/auth/login', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'views',
        loadChildren: () => import('./views/views.module').then(module => module.ViewsModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
