import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavedJob } from '../interface/saved_job';

@Injectable({
  providedIn: 'root'
})
export class SavedJobsService {
  private apiUrl = 'http://localhost:5211/api/SavedJob';

  constructor(private http: HttpClient) {}

  getSavedJobs(): Observable<SavedJob[]> {
    return this.http.get<SavedJob[]>(this.apiUrl);
  }

  saveJob(userId: number, jobId: number, applicationStatus: string): Observable<any> {
    const savedJob = { userId, jobId, applicationStatus };
    return this.http.post(this.apiUrl, savedJob);
  }

  updateJob(jobId: number, job: SavedJob): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${jobId}`, job);
  }

  deleteJob(jobId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${jobId}`);
  }
}
