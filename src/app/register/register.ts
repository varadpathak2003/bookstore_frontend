import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
user = { username: '', email: '', password: '' };

constructor(private http:HttpClient,private router:Router){}

  onSubmit() {
    this.http.post("http://localhost:3000/user/register",this.user)
      .subscribe({
        next:(response)=>{
          console.log("User Registration Successful");
          alert("Registration Successful");
          this.router.navigate(["/user/login"]);
        },
        error: (error) => {
          console.error('Error:', error);
          alert("Registration failed");
        }
      });
    console.log(this.user.email);
  }
}