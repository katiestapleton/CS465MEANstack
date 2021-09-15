import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../models/trip';


@Injectable()
export class TripDataService {

  constructor(private http: HttpClient) { };

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    //let URI = `${this.apiBaseUrl}/trips/`;
    return this.http //.get<Trip>(URI)
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
