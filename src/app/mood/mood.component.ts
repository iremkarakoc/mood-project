import { Component, OnInit } from '@angular/core';
import { DateTimeTemperature } from './time-temperature';
import { TemperatureService } from '../service/temperature.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss'],
  providers:[TemperatureService]
})

export class MoodComponent implements OnInit {

  temperature!: number ;
  constructor(private temperatureService: TemperatureService) {}
  temperatures: DateTimeTemperature =  <DateTimeTemperature>{};


  ngOnInit(): void {
    this.getTemperatures();
    this.getMood();


  }

  getTemperatures() {
    const d = new Date();
    let hour = d.getHours();
    this.temperatureService.getTemperatures().subscribe((data)=> {
      this.temperatures = data;
      this.temperature = this.temperatures.hourly.temperature_2m[hour-1];
    });
  }

  getDateTime(){
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    return ((month+1) + "-" + day);
  }

  getMood(){
    let temperature: number =this.temperature;
    let Mood = '';

    if(0 <= temperature && temperature <= 5){
      Mood = 'Sick';
    }
    if(5 < temperature && temperature<=10){
      Mood = 'Depressed';
    }
    if(10 < temperature && temperature<=15){
      Mood = 'Low';
    }
    if(25 < temperature && temperature<=30){
      Mood = 'Cheerful';
    }

    if(30 < temperature && temperature<=35){
      Mood = 'Bored';
    }
    if(35 < temperature){
      Mood = 'Angry';
    }
    return Mood;

  }



}




