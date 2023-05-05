import { AuthorService } from './../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { Author } from './author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers:[AuthorService]
})
export class AuthorComponent implements OnInit { 

  constructor(private authorService:AuthorService) { }
  authors?: Author[];
  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors(): void {
    this.authorService.getAuthors().subscribe(data=>{
      this.authors = data;
      console.log("authors-component",data);
    })
  }
}
