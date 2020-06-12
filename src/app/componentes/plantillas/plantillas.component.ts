import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  public titulo;
  public administrador;

  constructor() { 
    this.titulo = "Plantillas ngTemplate en Angular"
    this.administrador = true;
  }

  cambiar(value){
    this.administrador = value; 
  }

  ngOnInit(): void {
  }

}
