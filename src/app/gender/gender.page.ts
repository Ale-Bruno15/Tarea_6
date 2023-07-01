import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  name: string ='';
  gender: string='';

  constructor(private http: HttpClient) { }

  predictGender() {
    this.http.get<any>(`https://api.genderize.io/?name=${this.name}`).subscribe(
      (response) => {
        this.gender = response.gender;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

}
