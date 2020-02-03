import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OportunidadeServiceService {

  url = "http://localhost:8080/oportunidades";

  constructor(private http: HttpClient) { }

  findAll() {
     return this.http.get(this.url);
  }

  post(oportunidade: any){
    return this.http.post(this.url, oportunidade);
  }
}
