import { Injectable } from '@angular/core';
import { Project } from '../_interface/Project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor(private http: HttpClient) { }

getProjects(): Observable<Project> {
  return this.http.get<Project>('http://localhost:5000/project');
}

}
