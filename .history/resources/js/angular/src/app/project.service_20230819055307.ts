import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Project{
  id: number;
  name: string;
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

  getProject(id: number): Promise<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${environment.baseUrl}/api/projects/${id}`).toPromise();
  }

  createProjects(data: Project) {
    return this.http.post(`${environment.baseUrl}/api/projects`, data).toPromise();
  }
}
