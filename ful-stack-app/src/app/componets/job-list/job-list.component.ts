// src/app/job-list/job-list.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { JobListService } from '../../services/job-list.service';
import { SavedJobsService } from '../../services/saved-jobs.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  imports: [FormsModule, CommonModule, RouterLink],
  standalone: true,
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  userId: number = 1; 

  constructor(
    private jobListService: JobListService,
    private jobService: JobService,
    private savedJobService: SavedJobsService
  ) {}

  ngOnInit(): void {
    this.jobListService.searchResults$.subscribe(results => {
      console.log('Job list updated:', results); // line for debugging
      this.jobs = results;
    });
  }

  saveJob(job: Job): void {
    this.savedJobService.saveJob(this.userId, job.jobId, 'Applied').subscribe(
      () => console.log('Job saved successfully'),
      error => console.error('Error saving job', error)
    );
  }
  
}
