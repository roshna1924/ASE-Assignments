import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {WeatherService} from './weather.service';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HourlyComponent } from './hourly/hourly.component';


const appRoutes = [
  {
    path: '', component: SettingComponent
  },
  {
    path: 'setting' , component: SettingComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hourly', component: HourlyComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HomeComponent,
    HourlyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
