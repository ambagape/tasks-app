import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Project{
  id: number;
  name: string;
}

export interface ProjectResponse{
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Promise<Array<Project>> {
    return this.http.get<Array<Project>>(`${environment.baseUrl}/api/projects`).toPromise();
  }

  createProjects(data: Project) {
    return this.http.post(`${environment.baseUrl}/api/projects`, data).toPromise();
  }
}
