import { FornecedorInterface } from './../interfaces/FornecedorInterface';
import { Fornecedor } from './../models/Fornecedor';
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styles: [  ]
})

export class FornecedorComponent  {

  @Input() nome: string = '';
  @Input() cnpj: string = '';
  
  @Output() submitEvent = new EventEmitter<any>();
  
  novo: FornecedorInterface;
  
  selected: FornecedorInterface = {nomeFornecedor: 'Teste', cnpj: '983r9837897987'};

  public fornecedores: Array<Fornecedor>;
  
  onSubmit() { console.log('hello world'); this.submitted = true; }

  newFornecedor() { this.novo; this.submitted = false }
  
  submitted = false;

  constructor() {  }

  showAlert() {
    alert('Cadastrado com sucesso!')
  }
}
