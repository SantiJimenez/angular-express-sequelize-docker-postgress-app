import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

interface Response {
  data: [];
  message: string;
}
@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css'],
})
export class LocationsListComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  locations: any;
  currentLocation = null;
  currentIndex = -1;
  name = '';

  ngOnInit(): void {
    this.retrieveLocations();
  }

  retrieveLocations(): void {
    this.locationService.getAll().subscribe(
      (data: Response) => {
        this.locations = data.data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setActiveLocation(location, index): void {
    this.currentLocation = location;
    this.currentIndex = index;
  }
}
