import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserInfoStore } from '../stores/userInfoStore';

@Component({
  selector: 'protected',
  standalone:true,
  imports: [],
  templateUrl: './protected.html',
  styleUrl: './protected.css',
})
export class Protected {

  userInfoStore=inject(UserInfoStore);
  message="";
  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log(this.userInfoStore.jwtToken());
    this.http.get<any>("http://localhost:3000/api/protected",
      {
        headers: {
          Authorization: `Bearer ${this.userInfoStore.jwtToken()}`
        }
      }
    )
      .subscribe({
        next: (response) => {
        this.message="You are authorized"
        },
        error: (error) => {
          this.message="You are not authorized"
          console.error('Error:', error);
        }
      });
  }
}
