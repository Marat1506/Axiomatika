import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityResponse, CountryResponse } from './interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  http = inject(HttpClient)

  baseApiURL = 'http://geodb-free-service.wirefreethought.com/'


  constructor() { 
  }

  getCountry(): Observable<CountryResponse>{
    return this.http.get<CountryResponse>(`${this.baseApiURL}v1/geo/countries`)
  }
  getCity(): Observable<CityResponse>{
    return this.http.get<CityResponse>(`${this.baseApiURL}v1/geo/cities`)
  }

  
}
