import { Component, OnInit, Input } from '@angular/core';
import{ trips } from '..//data/trips';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
   
  //trips: Array<any> = trips;
  @Input('trip') trip: any;

  constructor() { }

  ngOnInit(): void {
  }

}
