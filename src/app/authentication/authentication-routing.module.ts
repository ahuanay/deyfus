import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '404',
        component: Error404Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

