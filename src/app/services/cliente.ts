import { Injectable, signal } from '@angular/core';
import { Cliente } from '../types/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  readonly listaClientes = signal<Cliente[]>([]);

  adicionarCliente(novoCliente: Cliente) {
    this.listaClientes.update((lista) => [...lista, novoCliente]);
  }

  listSize(): number {
    return this.listaClientes().length;
  }

  printClientes(): void {
    console.log(this.listaClientes());
  }

  getClientes(): Cliente[] {
    return this.listaClientes();
  }
}
