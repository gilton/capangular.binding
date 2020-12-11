import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../model/fornecedor.models';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})

export class FornecedorComponent implements OnInit {
  
  fornecedor: Fornecedor = {nome: ""};
  error: boolean = false
  errorDesc: string = ""


  constructor() { }
  
  ngOnInit(): void { }
  
  onSend() {
    console.log(this.fornecedor)

    if( !this.fornecedor.nome ) {
      this.error = true;
      this.errorDesc = "Preencha o nome"
    } else {
      this.error = false;
    }
  }

}
