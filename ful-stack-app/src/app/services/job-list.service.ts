import { Injectable } from '@angular/core';
import { Job } from '../interface/jobs';
import { BehaviorSubject } from 'rxjs';

// can be injected into other components
@Injectable({
  providedIn: 'root'
})
// Service to manage the job list
export class JobListService {
  private searchResultsSource = new BehaviorSubject<Job[]>([]);
  searchResults$ = this.searchResultsSource.asObservable();

  updateSearchResults(results: Job[]) {
    console.log('Updating search results:', results); // line for debugging
    this.searchResultsSource.next(results);
  }
}
