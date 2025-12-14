import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  standalone:true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user={email:"",password:""};

  constructor(private http:HttpClient){}

  onSubmit() {
    this.http.post("http://localhost:3000/user/login",this.user)
      .subscribe({
        next:(response)=>{
          console.log("User Login Successful");
          alert("Login Successful");
        },
        error: (error) => {
          console.error('Error:', error);
          alert("Incorrect email or password");
        }
      });
    console.log(this.user.email);
  }
}
