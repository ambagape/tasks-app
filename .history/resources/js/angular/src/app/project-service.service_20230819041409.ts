import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient) { }

  getTasks(): Promise<Array<Task>> {
    return this.http.get<Array<Task>>(`${environment.baseUrl}/api/tasks`).toPromise();
  }

  createTask(data: Task) {
    return this.http.post(`${environment.baseUrl}/api/tasks`, data).toPromise();
  }

  updateTask(id: number, data: Task) {
    return this.http.put(`${environment.baseUrl}/api/tasks/${id}`, data).toPromise();
  }

  deleteTask(id: number) {
    return this.http.delete<Array<Task>>(`${environment.baseUrl}/api/tasks/${id}`).toPromise();
  }
}
