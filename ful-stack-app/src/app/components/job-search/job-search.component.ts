// src/app/job-search/job-search.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobListService } from '../../services/job-list.service';
import { SavedJobsService } from '../../services/saved-jobs.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class JobSearchComponent implements OnInit {
  jobSearchResults: Job[] = [];

  constructor(
    private jobService: JobService,
    private jobListService: JobListService,
    private savedJobsService: SavedJobsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSearch(form: NgForm) {
    const searchData = {
      jobTitle: form.value.jobTitle,
      companyName: form.value.companyName,
      location: form.value.location,
      keywords: form.value.keywords
    };
    console.log('Search Data:', searchData);
    this.jobService.searchJobs(searchData).subscribe(
      (response: any) => {
        console.log('Job Search Results:', response);
        const jobSearchResults: Job[] = response.$values || []; 
        this.jobSearchResults = jobSearchResults;
        this.jobListService.updateSearchResults(jobSearchResults);
        this.router.navigate(['/job-list']);
      },
      (error) => {
        console.error('Error searching jobs:', error);
      }
    );
  }


  saveJob(job: Job): void {
    const userId = 1; 
    this.savedJobsService.saveJob(userId, job.jobId, 'Applied').subscribe(
      () => console.log('Job saved successfully'),
      error => console.error('Error saving job', error)
    );
  }

}
