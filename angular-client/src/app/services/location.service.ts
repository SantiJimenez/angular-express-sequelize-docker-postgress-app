import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/locations';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  // tslint:disable-next-line: typedef
  getAll() {
    return this.http.get(baseUrl);
  }
}
