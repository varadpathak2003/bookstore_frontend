import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserInfoStore } from '../stores/userInfoStore';

@Component({
  selector: 'login',
  standalone:true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user={email:"",password:""};

  constructor(private http:HttpClient,private router:Router){}
  store=inject(UserInfoStore);

  onSubmit() {
    this.http.post<any>("http://localhost:3000/user/login",this.user)
      .subscribe({
        next:(response)=>{
          const token=response.token;
          const user:{userID:string,email:string,name:string}=response.user;
      
          this.store.setToken(token);
          this.store.setUser(user);
          this.store.setIsLoggedIn(true);
          
          alert("Login Successful");
          this.router.navigate([""]);
        },
        error: (error) => {
          console.error('Error:', error);
          alert("Incorrect email or password");
        } 
      });
  }
}
