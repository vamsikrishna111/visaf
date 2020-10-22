import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../model/form';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisaFormService {
  //private getUrl="http://localhost:8086/Forms"

  constructor(private httpclient:HttpClient) {}
  //getForms(): Observable<Form[]>{
    //return this.httpclient.get<Form[]>(this.getUrl).pipe(
      //map(response => response)
    //)
   }
   //saveForms(form: Form): Observable<Form>{
    //return this.httpclient.post<Form>(this.getUrl,form);
   //}
  //}
