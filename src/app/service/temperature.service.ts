import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateTimeTemperature } from '../mood/time-temperature';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  getMoodByWeather(moods: string) {
      throw new Error('Method not implemented.');
    }

  constructor(private http: HttpClient) { }

  url = 'https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m';

  getTemperatures(){
    return this.http
    .get(this.url)
    .pipe(map((response)=> response as DateTimeTemperature ));
  }
}
