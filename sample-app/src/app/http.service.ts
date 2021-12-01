import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_key: string = "62fb6c33dc83c3f15c98fb866d9ad021";

  constructor(private _http: HttpClient){}


  getInfoCity(city:string){
    let tempObservable = this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${this.API_key}&units=metric`);
    return tempObservable;

  }


}
