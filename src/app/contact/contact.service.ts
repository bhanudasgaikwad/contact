import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ContactList } from './contact-list';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  dataUrl = '../assets/data/data.json';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization: 'token'
    })
  }

  getData(){
    return this.http.get<ContactList>(this.dataUrl);
  }

  saveData(data: ContactList): Observable<ContactList> {
    return this.http.post<ContactList>(this.dataUrl, data, this.httpOptions);
  }

  editData(data: ContactList): Observable<any> {
    return this.http.put<ContactList>(this.dataUrl, data, this.httpOptions)
  }

  deleteData(id: number) {
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

}