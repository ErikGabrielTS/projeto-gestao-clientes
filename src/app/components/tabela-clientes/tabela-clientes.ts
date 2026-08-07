import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente';
import { FabAdd } from '../fab-add/fab-add';

@Component({
  selector: 'app-tabela-clientes',
  imports: [FabAdd],
  templateUrl: './tabela-clientes.html',
  styleUrl: './tabela-clientes.css',
})
export class TabelaClientes implements OnInit {
  private clienteService = inject(ClienteService);

  clientes = this.clienteService.clientes;
  loading = this.clienteService.loading;

  async ngOnInit(): Promise<void> {
    await this.clienteService.getClientes();
  }
}
