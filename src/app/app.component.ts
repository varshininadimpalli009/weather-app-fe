import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // WeatherCardComponent,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  city = 'Hyderabad';
  weatherData: any;
  loading = false;
  error = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.searchWeather();
  }

  // Fetch weather data based on the city name
  searchWeather() {
    this.loading = true;
    this.error = '';

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },

      error: () => {
        this.error = 'City not found';
        this.loading = false;
      },
    });
  }
}
