import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
})
export class PrimeiroComponenteComponent implements OnInit {

  teste = "yu";
  teste2 = "ya";

  teste3(){
    return "yo"
  }
  cliente = {
    id: 1,
    nome: "Felipe"
  }

  clientes = [
    {
    id: 1,
    nome: "Felipe",
    ativo: true
    },
    {
      id: 2,
      nome: "Felipe2",
      ativo: false

      },
  ]


  constructor() { }

  ngOnInit() {
  }

}
