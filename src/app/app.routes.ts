import { Routes } from '@angular/router';
import { Book } from './book/book';
import { Index } from './index/index';
import { Login } from './login/login';
import { Protected } from './protected/protected';
import { Register } from './register/register';

export const routes: Routes = [
    {path:"api/register",component:Register},
    {path:"api/book/:id",component:Book},
    {path:"api/login",component:Login},
    {path:"api/protected",component:Protected},
    {path:"",component:Index},
];
