import { Routes } from '@angular/router';
import { Book } from './book/book';
import { Index } from './index/index';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    {path:"user/register",component:Register},
    {path:"book/:id",component:Book},
    {path:"user/login",component:Login},
    {path:"",component:Index},
];
