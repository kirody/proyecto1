import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { error } from 'protractor';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Producto[];
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) { 
    this.confirmado = null;
  }

  ngOnInit(): void {
    console.log('productos.component.ts cargado');
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos().subscribe(
      resultado => {

          if(resultado['code'] != 200){
            console.log(resultado);
          }else{
            this.productos = resultado['data'];
          }
      },
      error =>{
          console.log(<any>error);
      }
    );
  }

  borrarConfirm(id){
    this.confirmado = id;
  }

  cancelarConfirm(){
    this.confirmado = null;
  }

  onDeleteProducto(id){
    this._productoService.deleteProducto(id).subscribe(
      response => {
          if(response['code'] == 200){
            this.getProductos();
          }else{
            alert('Error al borrar el producto');
          }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
