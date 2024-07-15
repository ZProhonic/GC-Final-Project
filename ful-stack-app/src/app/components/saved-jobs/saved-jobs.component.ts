// src/app/saved-jobs/saved-jobs.component.ts
import { Component, OnInit } from '@angular/core';
import { SavedJob } from '../../interface/saved_job';
import { SavedJobsService } from '../../services/saved-jobs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class SavedJobsComponent implements OnInit {
  savedJobs: SavedJob[] = [];
  statuses: string[] = ['Applied', 'Interview Scheduled', 'Pending Interview', 'Offer Received', 'Rejected'];

  constructor(private savedJobsService: SavedJobsService) {}

  ngOnInit(): void {
    this.getSavedJobs();
  }

  getSavedJobs(): void {
    this.savedJobsService.getSavedJobs().subscribe(
      (response: any) => {
        console.log('Retrieved saved jobs:', response);
        this.savedJobs = response.$values || []; 
        console.log('Saved Jobs array:', this.savedJobs);

        this.savedJobs.forEach(savedJob => console.log('Job Object:', savedJob));
      },
      error => {
        console.error('Error retrieving saved jobs:', error);
      }
    );
  }

  updateJobStatus(savedJob: SavedJob, status: string): void {
    savedJob.applicationStatus = status;
    this.savedJobsService.updateJob(savedJob.jobId, savedJob).subscribe(
      () => console.log('Job status updated successfully'),
      error => console.error('Error updating job status', error)
    );
  }
}
