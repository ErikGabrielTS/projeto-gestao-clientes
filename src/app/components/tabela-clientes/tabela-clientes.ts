import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente';
import { Cliente } from '../../types/cliente';

@Component({
  selector: 'app-tabela-clientes',
  imports: [],
  templateUrl: './tabela-clientes.html',
  styleUrl: './tabela-clientes.css',
})
export class TabelaClientes implements OnInit {
  private clienteService = inject(ClienteService);
  listaClientes: Cliente[] = [];

  ngOnInit() {
    this.listaClientes = this.clienteService.getClientes();
  }
}
