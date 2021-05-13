import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/forms';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
}
