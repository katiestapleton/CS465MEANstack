import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { TripListingComponent } from "./trip-listing/trip-listing.component";

 const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent},
  { path: '', component: TripListingComponent, pathMatch: 'full'}
 ]

 @NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRountingModule { }

