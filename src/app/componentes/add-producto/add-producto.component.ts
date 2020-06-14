import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../models/producto';
import { GLOBAL } from 'src/app/servicios/global';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  public producto: Producto;
  public filesToUpload;
  public resultUpload;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.producto = new Producto(0, '', '', 0, '');
  }

  ngOnInit(): void {
    console.log('Este add-producto.component.ts cargado');
  }

  onSubmit() {
    console.log(this.producto);

    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.producto.imagen = this.resultUpload.filename;
        this.saveProducto();

      }, (error) => {
        console.log(error);
      });
    } else {
      this.saveProducto();
    }
  }

  saveProducto() {
    this._productoService.addProducto(this.producto).subscribe(
      resultado => {
        if (resultado['code'] == 200) {
          this._router.navigate(['/productos']);
        } else {
          console.log(resultado);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
