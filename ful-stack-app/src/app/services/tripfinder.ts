// src/app/services/tripfinder.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tripadvisor } from '../interface/tripadvisor';

@Injectable({
    providedIn: 'root'
})
export class TripfinderService {
    private apiUrl = 'https://api.content.tripadvisor.com/api/v1/location/search?key=D4E52B05DB3F4C99A921FB8A46261675&searchQuery=';
    category = "attraction"
    constructor(private http: HttpClient) { }

    getCityInfo(city: string): Observable<tripadvisor> {
        let url = `${this.apiUrl}${city}&category=${this.category}&language=en`
        return this.http.get<tripadvisor>(url);
    }
}
