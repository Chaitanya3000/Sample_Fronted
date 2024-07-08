import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleTableService {
  private baseUrl = 'http://localhost:3300/SAMPLE_TABLE';

  constructor(private http: HttpClient) { }

  read(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Read`);
  }

  insert(details: { Name: string, Age: number, Salary: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/Insert`, details);
  }
}
