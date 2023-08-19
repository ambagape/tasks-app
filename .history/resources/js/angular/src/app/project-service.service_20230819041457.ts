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

  updateTask(id: number, data: Task) {
    return this.http.put(`${environment.baseUrl}/api/tasks/${id}`, data).toPromise();
  }

  deleteTask(id: number) {
    return this.http.delete<Array<Task>>(`${environment.baseUrl}/api/tasks/${id}`).toPromise();
  }
}
