import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-universities',
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage implements OnInit {
  country: string='';
  universities!: any[];

  constructor(private http: HttpClient) { }

  searchUniversities() {
    const countryParam = encodeURIComponent(this.country);
    this.http.get<any[]>(`http://universities.hipolabs.com/search?country=${countryParam}`).subscribe(
      (response) => {
        this.universities = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

}
