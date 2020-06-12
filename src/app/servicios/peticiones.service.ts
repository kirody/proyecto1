import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public url: string;

  constructor(private httpClient:HttpClient) {
      this.url= "https://jsonplaceholder.typicode.com/posts";
   }

  getPrueba(){
    return 'Hola mundo desde el servicio';
  }

  getArticulos(){
    return this.httpClient.get(this.url);
  }
    
}
