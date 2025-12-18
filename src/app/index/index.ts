import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BookStore } from '../stores/bookStore';
import { UserInfoStore } from '../stores/userInfoStore';

@Component({
  selector: 'index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  private bookStore = inject(BookStore);
  private userInfoStore = inject(UserInfoStore);

  books = this.bookStore.books;
  isLoggedIn=this.userInfoStore.isLoggedIn;

  constructor(private httpClient: HttpClient,private router:Router) { }

  ngOnInit() {
    this.httpClient.get<any[]>("http://localhost:3000/books")
      .subscribe({
        next:(response)=>{
          const books=response;
          console.log("User Logged in ??::",this.isLoggedIn())
          const displayedBooks = this.isLoggedIn() ? books : books.slice(0, 5);
          this.bookStore.setBooks(displayedBooks);
          console.log(displayedBooks);
        },
        error:(error)=>{
          console.error("Error : ",error);
          alert("Issue  while loading the books")
        }
      })
  }

  viewBookDetails(id:number){
    console.log("View Book Details");
    if(!this.isLoggedIn()){
      this.router.navigate(["api/login"]);
      return;
    }
    this.router.navigate(["api/book",id]);
  }
}
