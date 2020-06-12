import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { Error404Component } from './componentes/error404/error404.component';
import { HomeComponent } from './componentes/home/home.component';
import { CochesComponent } from './componentes/coches/coches.component';
import { PlantillasComponent } from './componentes/plantillas/plantillas.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'pagina2/:page', component: Pagina2Component},
  {path: 'mostrar', component: MostrarComponent},
  {path: 'coches', component: CochesComponent},
  {path: 'plantillas', component: PlantillasComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
