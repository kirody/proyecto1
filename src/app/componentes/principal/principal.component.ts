import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../servicios/global';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public header_color: string;

  constructor() {
    this.header_color = GLOBAL.header_color;
   }

  ngOnInit(): void {
  }

}
