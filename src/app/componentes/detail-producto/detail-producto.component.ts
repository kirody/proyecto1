import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-detail-producto',
  templateUrl: './detail-producto.component.html',
  styleUrls: ['./detail-producto.component.css']
})
export class DetailProductoComponent implements OnInit {
  public producto: Producto;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log('detail-producto.component.ts cargado')
    this.getProducto();
  }

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._productoService.getProducto(id).subscribe(
        response => {
          if(response['code'] == 200){
              this.producto = response['data'];
          }else{
              this._router.navigate(['/productos']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
