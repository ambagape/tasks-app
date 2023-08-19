import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Task} from 'src/app/task.service';

export interface Project{
  id: number;
  name: string;
  tasks: Array<Task>;
}

export interface ProjectResponse{
  data: Array<Project>;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Promise<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${environment.baseUrl}/api/projects`).toPromise();
  }

  getProject(id: number): Promise<{data: Project}> {
    return this.http.get<{data: Project}>(`${environment.baseUrl}/api/projects/${id}`).toPromise();
  }

  createProjects(data: Project) {
    return this.http.post(`${environment.baseUrl}/api/projects`, data).toPromise();
  }
}
