import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Task{
  id: number;
  name: string;
  description: string;
  project_id: number;
  status: string;
  order: string;
}

export interface TaskResponse{
  data: Array<Task>;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Promise<TaskResponse>{
    return this.http.get<TaskResponse>(`${environment.baseUrl}/api/tasks`).toPromise();
  }

  createTask(data: Task){
    return this.http.post(`${environment.baseUrl}/api/tasks`, data).toPromise();
  }

  updateTask(id: number, data: Task){
    return this.http.put(`${environment.baseUrl}/api/tasks/${id}`, data).toPromise();
  }

  deleteTask(id: number){
    return this.http.delete(`${environment.baseUrl}/api/tasks/${id}`).toPromise();
  }
}
