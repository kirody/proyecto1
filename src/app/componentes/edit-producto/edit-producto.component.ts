import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../models/producto';
import { GLOBAL } from 'src/app/servicios/global';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  public producto: Producto;
  public filesToUpload;
  public resultUpload;
  public is_edit;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.producto = new Producto(0, '', '', 0, '');
    this.is_edit = true;
  }

  ngOnInit(): void {
    console.log('Este edit-producto.component.ts cargado');
    this.getProducto();
  }

  getProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._productoService.getProducto(id).subscribe(
        response => {
          if (response['code'] == 200) {
            this.producto = response['data'];
          } else {
            this._router.navigate(['/productos']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  onSubmit() {
    console.log(this.producto);

    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.producto.imagen = this.resultUpload.filename;
        this.updateProducto();

      }, (error) => {
        console.log(error);
      });
    } else {
      this.updateProducto();
    }
  }

  updateProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._productoService.editProducto(id, this.producto).subscribe(
        resultado => {
          if (resultado['code'] == 200) {
            this._router.navigate(['/producto', id]);
          } else {
            console.log(resultado);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
