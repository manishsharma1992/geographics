import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { City, Country, State } from '../_models/geographics.model';

const COUNTRIES_URL = "https://api.countrystatecity.in/v1/countries";
const API_KEY = "N3MxWGtScnFjdXVJalJOM1ZyWUNOSXNSTUVpNzBEZjM1S3hPd053eQ==";

@Injectable({
  providedIn: 'root'
})
export class GeographicsService {

  constructor(readonly httpClient: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(COUNTRIES_URL, {
      headers: new HttpHeaders().append("X-CSCAPI-KEY", API_KEY)
    });
  }

  getAllStateByCountry(countryCode: string): Observable<State[]> {
    return this.httpClient.get<State[]>(COUNTRIES_URL + '/' + countryCode + '/states',  {
      headers: new HttpHeaders().append("X-CSCAPI-KEY", API_KEY)
    });
  }

  getAllCityByState(countryCode: string, stateCode: string): Observable<City[]> {
    return this.httpClient.get<City[]>(COUNTRIES_URL + '/' + countryCode + '/states' + stateCode + '/cities', {
      headers: new HttpHeaders().append("X-CSCAPI-KEY", API_KEY)
    })
  }
}
