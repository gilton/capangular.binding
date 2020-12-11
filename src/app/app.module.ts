import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FormsModule } from '@angular/forms';
import { ClienteViewComponent } from './cliente/cliente-view/cliente-view.component';
import { FornecedorViewComponent } from './fornecedor/fornecedor-view/fornecedor-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FornecedorComponent,
    ClienteViewComponent,
    FornecedorViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
