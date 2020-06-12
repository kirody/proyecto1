import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   getProductos(){
      return "TEXTO DESDE EL SERVICIO";
   }
}
