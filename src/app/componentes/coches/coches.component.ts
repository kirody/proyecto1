import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../../servicios/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {

  public coche: Coche;
  public coches:Array<Coche>;
  public articulos;

  constructor(
      private _peticionesService: PeticionesService
  ) { 
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renault Clio","110","Azul")
    ];
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

  ngOnInit(): void {
    this._peticionesService.getArticulos().subscribe(
                                          resultado => {
                                            this.articulos = resultado;
                                            
                                            if(!this.articulos){
                                              console.log("Error en el servidor");
                                            }
                                          },
                                          error => {console.log(JSON. stringify(error));});
  }

}
