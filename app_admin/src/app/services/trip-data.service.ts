import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse'; 
import { BROWSER_STORAGE } from '../storage';


@Injectable()
export class TripDataService {

  constructor(private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { };

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripURL = `${this.apiBaseUrl}trips/`

  // read ALL trips
  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    //let URI = `${this.apiBaseUrl}/trips/`;
    return this.http //.get<Trip>(URI)
      .get(this.tripURL)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
      
  }

  // read SINGLE trip
  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripURL + tripCode)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
    }


public addTrip(form: Trip): Promise<Trip> {
  console.log('Inside tripdataservicesTS@addtip')
  return this.http
  .post(this.tripURL, FormData)
  .toPromise()
  .then(response => response as Trip[])
  .catch(this.handleError);
}

public updateTrip(formData: Trip): Promise<Trip> {
  console.log('Inside TripDataService#upateTrip');
  console.log(formData);
  return this.http
    .put(this.tripURL + formData.code, formData)
    .toPromise()
    .then(response => response as Trip[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }


  public login(user: User): Promise<Authresponse> {
   return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
    .post(url, user)
    .toPromise()
    .then(response => response as Authresponse)
    .catch(this.handleError);
  }

}
