import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

//import{ trips } from '../data/trips';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';


@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
   
  //trips: Array<any> = trips;
  @Input('trip') trip: any;
  
  trips!: Trip[];

  message!: string;

  constructor(
    private tripDataService: TripDataService,
    private router : Router
  ) { }

  // error occures when declared as private. HTML access is denied
  public addTrip (): void {
    console.log('Insure TripListComponent #addtrip')
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? '' : 'No trips found';
      this.trips = foundTrips;
      });
}

  ngOnInit(): void {
    this.getTrips();
  }

}
