import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  title = 'Chicago, IL'
  id :string = '4887398'
  hum:any
  temp_avg:any
  temp_high:any
  temp_low:any
  status:any
  imgpath = 'assets/img/chicago.jpg'

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    let observable = this._httpService.getInfoCity(this.id);
    observable.subscribe((data:any) => {
      this.hum = data.main.humidity;
      this.temp_avg = data.main.temp;
      this.temp_high = data.main.temp_max;
      this.temp_low = data.main.temp_min;
      this.status = data.weather[0].description
    });
}

}
