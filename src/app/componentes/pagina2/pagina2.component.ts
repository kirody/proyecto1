import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  public parametro;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
      /*console.log(params);*/
    });
  }

  redirigir(){
    this._router.navigate(['/pagina2','http://victorvidal.atwebpages.com/']);
  }

  redirigir2(){
    this._router.navigate(['/home']);
  }

}
