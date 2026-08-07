import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente';
import { FabAdd } from '../fab-add/fab-add';
import { ModalForm } from '../modal-form/modal-form';

@Component({
  selector: 'app-tabela-clientes',
  imports: [FabAdd, ModalForm],
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

  deleteCliente(id: string | undefined): void {
    if (!id) {
      console.error('ID do cliente inválido');
      return;
    }

    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.deleteCliente(id);
    }
  }
}
