import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private authService: AuthService,private router:Router) {}


  ngOnInit(): void {
  }
  // book-list.component.ts

  books: any[] = [
    {  id:1 ,title: 'Harry Potter and Crazy Creature', author: 'J.K.Rowling', publishedYear: 2006 },
    { id:2 ,title: 'Amazing Spider Man', author: 'Sandeep Yadav', publishedYear: 2023 },
    { id:3 ,title: 'Learn Angular in 1 Day', author: 'Rohit Vishwakarma', publishedYear: 2022 },
    { id: 4,title: 'Web dev 3 in Hindi', author: 'Ayush Singh', publishedYear: 2015 },
    { id: 5,title: 'Mystery in the dark', author: 'Mr. Unknwown', publishedYear: 2019 },
    { id: 6,title: 'The Temple Run', author: 'William Shakespeare', publishedYear: 2021 },
  ];


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
}



