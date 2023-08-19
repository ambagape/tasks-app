import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient) { }

  getProjects(): Promise<Array<Task>> {
    return this.http.get<Array<Task>>(`${environment.baseUrl}/api/projects`).toPromise();
  }

  createProjects(data: Task) {
    return this.http.post(`${environment.baseUrl}/api/projects`, data).toPromise();
  }
}
