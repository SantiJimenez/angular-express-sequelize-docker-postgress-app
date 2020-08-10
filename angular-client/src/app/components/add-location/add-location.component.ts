import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  location = {
    name: '',
    area: '',
  };
  submitted = false;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {}

  saveLocation(): any {
    const data = {
      name: this.location.name,
      area: this.location.area,
    };

    this.locationService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newLocation(): any {
    this.submitted = false;
    this.location = {
      name: '',
      area: '',
    };
  }
}
