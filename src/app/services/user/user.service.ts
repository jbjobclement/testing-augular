import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from "rxjs";
import { UserData } from './type';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient){}
  getUsers(): Observable<UserData> {
    return this.http.get<UserData>('https://jsonplaceholder.typicode.com/posts')
  }
}