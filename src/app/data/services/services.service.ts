import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityResponse, CountryResponse } from './interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  http = inject(HttpClient)

  baseApiURL = 'http://geodb-free-service.wirefreethought.com/'
  apiKey = '65d0403b95msh63531296a7c5cb0p12556bjsn7429ac5e9a26'


  constructor() {
  }

  getCountry(): Observable<CountryResponse> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey
    })
    return this.http.get<CountryResponse>(`${this.baseApiURL}v1/geo/countries`, { headers })
  }
  getCity(countryId: string): Observable<CityResponse> {
    console.log("CountryID = ", countryId)
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey
    })
    return this.http.get<CityResponse>(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryId}/places`, {headers})
  }


}
