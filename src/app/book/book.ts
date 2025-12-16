import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStore } from '../stores/bookStore';

@Component({
  selector: 'book',
  imports: [RouterLink],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  private route = inject(ActivatedRoute);
  private bookStore = inject(BookStore);

  bookId = +this.route.snapshot.params['id'];

  book = computed(() =>
    this.bookStore.books()?.find(b => b.BookID === this.bookId) ?? null
  );
}
