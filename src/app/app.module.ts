import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    PedidoFormComponent,
    FornecedorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
