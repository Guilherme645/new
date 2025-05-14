import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  name: string;
  description: string;
  progressState: 'default' | 'active' | 'complete' | 'error' | 'pause';
  progressPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private jsonUrl = 'assets/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonUrl);
  }
}