import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodComponent } from './mood/mood.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureService } from './service/temperature.service';


@NgModule({
  declarations: [
    AppComponent,
    MoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
