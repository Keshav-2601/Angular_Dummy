import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // ✅ Ensures that Angular can inject this service globally
})
export class MainpageService {
  private apiUrl = 'http://localhost:3200/user/loginuser';

  constructor(private http: HttpClient) {}  // ✅ No dependency on MainPageComponent

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
