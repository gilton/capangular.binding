import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';


@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {

  cliente:Cliente = {};

  clientes: Array<Cliente> = [
    { id: 1, cpf: "12345678", nome: "John", endereco: "Rua ABC" },
    { id: 2, cpf: "09876543", nome: "Mary", endereco: "Rua XPTO" },
    { id: 3, cpf: "54654645", nome: "Laura", endereco: "Rua Capgemini" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}