import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Country } from '../models/country';
import { Observable, throwError } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _http: HttpClient) { }

  //private host = "https://api.covid19api.com/live"
  //private host = "https://api.coronastatistics.live"
  private host = "https://covid19.mathdro.id/api"

  getAll(type): Observable<Country>{
    return this._http.get<Country>(`${this.host}/countries?sort=${type}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getCountry(name): Observable<Country>{
    return this._http.get<Country>(`${this.host}/countries/${name}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getTimeline(){
    return this._http.get(`${this.host}/daily`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getTimelineCountry(country){
    return this._http.get(`${this.host}/daily/${country}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getTimelineGlobal(){
    return this._http.get(`${this.host}/daily/global`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert("Please check your internet connection!.");
    return throwError(errorMessage);
 }
}
