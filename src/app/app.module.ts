import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { Error404Component } from './componentes/error404/error404.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { CochesComponent } from './componentes/coches/coches.component';
import { PeticionesService } from './servicios/peticiones.service';
import { HttpClientModule } from '@angular/common/http';
import { PlantillasComponent } from './componentes/plantillas/plantillas.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoService } from './servicios/producto.service';
import { AddProductoComponent } from './componentes/add-producto/add-producto.component';
import { DetailProductoComponent } from './componentes/detail-producto/detail-producto.component';
import { EditProductoComponent } from './componentes/edit-producto/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Pagina2Component,
    MostrarComponent,
    Error404Component,
    MenuComponent,
    HomeComponent,
    CochesComponent,
    PlantillasComponent,
    ProductosComponent,
    AddProductoComponent,
    DetailProductoComponent,
    EditProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PeticionesService,
              ProductoService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
