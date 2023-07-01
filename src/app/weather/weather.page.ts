import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData: any;

  constructor() { }

  ionViewDidEnter() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const apiKey ='3b54f51ecf33e47a173134a7e59d54f8'; // Reemplaza con tu propia API Key de OpenWeatherMap
    const city = 'Santa domingo'; // Cambia a la ciudad deseada

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      this.weatherData = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
  }

}
