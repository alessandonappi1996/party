import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  getAdmin(){
    return this.http.get<any>(`${environment.apiUrl}/utente.json`)
  }
}
