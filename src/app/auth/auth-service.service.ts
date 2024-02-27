import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private  apiUrl = 'https://recipe-mania-tigz.onrender.com/api/v1/auth/register'
  private  apiLogin = 'https://recipe-mania-tigz.onrender.com/api/v1/auth/signin'

  constructor(public http: HttpClient) { }

  register(data: any){
    return this.http.post<any>(`${this.apiUrl}`, data)
  }
  
  login(data: any){
    return this.http.post<any>(`${this.apiLogin}`, data)
  }
}
