import { Component } from '@angular/core';
import { TemperatureService } from './service/temperature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temperature-mood';
}
