// src/app/city-info/city-info.component.ts
import { Component, OnInit } from '@angular/core';
import { TripfinderService } from '../../services/tripfinder';
import { FormsModule } from '@angular/forms';
import { tripadvisor } from '../../interface/tripadvisor';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class CityInfoComponent implements OnInit {
  city: string = '';
  cityInfo: tripadvisor | any;
  

  constructor(private tripfinderService: TripfinderService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.city);
  }

  getCityInfo(): void {
    console.log(this.city);
    this.tripfinderService.getCityInfo(this.city).subscribe(
      info => {
        console.log('API response:', info);
        this.cityInfo = info;
      },
      error => {
        console.error('Error fetching city info:', error);
      }
    );
  }

}
