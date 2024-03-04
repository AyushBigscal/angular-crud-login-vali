import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Book } from '../book';

@Component({
  selector: 'app-regbook',
  templateUrl: './regbook.component.html',
  styleUrls: ['./regbook.component.css']
})
export class RegbookComponent implements OnInit {

  bookData:any=[];
  
  constructor(private authService: AuthService) {
}
  ngOnInit(): void {
    this.getAllBooks();
  }



getAllBooks(){
  this.authService.getBooks().subscribe((res:Book[])=>{
    console.log(res);
    this.bookData =res;

  })
}




}