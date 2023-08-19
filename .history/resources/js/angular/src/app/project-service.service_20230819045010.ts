import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Project{
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient) { }

  getProjects(): Promise<Array<Project>> {
    return this.http.get<Array<Task>>(`${environment.baseUrl}/api/projects`).toPromise();
  }

  createProjects(data: Project) {
    return this.http.post(`${environment.baseUrl}/api/projects`, data).toPromise();
  }
}
