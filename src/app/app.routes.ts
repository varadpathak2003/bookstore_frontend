import { Routes } from '@angular/router';
import { Index } from './index/index';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    {path:"user/register",component:Register},
    {path:"user/login",component:Login},
    {path:"",component:Index},
];
