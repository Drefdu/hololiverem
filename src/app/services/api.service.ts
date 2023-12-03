import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'https://expressrem.vercel.app'; // Ajusta la URL según la configuración de tu servidor

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  add(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
}
