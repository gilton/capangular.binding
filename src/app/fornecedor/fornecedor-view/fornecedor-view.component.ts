import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './../../model/fornecedor.models';

@Component({
  selector: 'app-fornecedor-view',
  templateUrl: './fornecedor-view.component.html',
  styleUrls: ['./fornecedor-view.component.css']
})
export class FornecedorViewComponent implements OnInit {

  constructor() { }

  fornecedores: Array<Fornecedor> = [
    { id: 1, cnpj: "344412345678", nome: "Vortex LTDA", contato: "Rua ABC" },
    { id: 2, cnpj: "233209876543", nome: "Energt S/A", contato: "Rua XPTO" },
    { id: 3, cnpj: "524004654645", nome: "Souza S/L", contato: "Rua Capgemini" }
  ]

  ngOnInit(): void {
  }

}
