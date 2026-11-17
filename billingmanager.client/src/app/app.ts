import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  public forecasts$ = new Observable<WeatherForecast[]>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.forecasts$ = this.http.get<WeatherForecast[]>('/weatherforecast');
  }

  protected readonly title = signal('billingmanager.client');
}
