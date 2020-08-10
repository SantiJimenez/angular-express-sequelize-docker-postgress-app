import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLocationComponent } from './components/add-location/add-location.component';
import { LocationsListComponent } from './components/location-list/locations-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: 'locations', component: LocationsListComponent },
  { path: 'add', component: AddLocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
