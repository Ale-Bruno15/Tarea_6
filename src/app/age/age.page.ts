import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {
  name: string = '';
  age: string='';
  ageImage: string='';

  constructor(private http: HttpClient) { }

  determineAge() {
    this.http.get<any>(`https://api.agify.io/?name=${this.name}`).subscribe(
      (response) => {
        this.age = response.age.toString();
        this.ageImage = this.getAgeImage(response.age);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAgeImage(age: number): string {
    if (age < 18) {
      return 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (age >= 18 && age < 60) {
      return 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else {
      return 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
  }


  ngOnInit() {
  }

}
