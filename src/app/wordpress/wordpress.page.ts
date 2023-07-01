import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordpressResponse, WordpressPost } from './response.interface';


@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {
  wordpressNews!: any[];

  constructor(private http: HttpClient) { }

  
  getWordpressNews() {
    this.http.get<WordpressResponse>('https://public-api.wordpress.com/rest/v1.1/sites/www.forbes.com/posts?number=3').subscribe(

      (response) => {
        this.wordpressNews = response.posts;

      },


      (error) => {
        console.error(error);
      }
    );
  }


  ngOnInit() {
  }

}
