import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() id: number
  @Input() nome: string = ""
  @Input() cpf: string = ""
  @Input() endereco: string = ""
  @Input() ehCadastro: boolean = false

  cliente: Cliente = {}
  clientes: Cliente[] = []

  constructor() { 
    this.cliente.id = this.id;
    this.cliente.nome = this.nome;
    this.cliente.cpf = this.cpf;
    this.cliente.endereco = this.endereco;
   }

  ngOnInit(): void { }

  onSubmit(form: NgForm) { 
    // console.log('onSubmit')
    //console.log(form.value)
    
    let novo:Cliente = form.value
    //console.log(novo.nome)

    this.clientes.push(novo);
  }


  // minhas alterações
  
  exibirConsulta() { this.ehCadastro = false }

  exibirCadastro() { this.ehCadastro = true }

  adicionarCliente(obj: Cliente, clientes: Array<Cliente>) {
    clientes.push(obj);
    //console.log(clientes);
    //console.log(obj)
    this.ehCadastro = false;
  }

}
