import { Injectable, signal } from '@angular/core';
import { http } from '../core/http';
import { Cliente } from '../types/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  clientes = signal<Cliente[]>([]);
  loading = signal<boolean>(false);

  async getClientes(): Promise<void> {
    this.loading.set(true);

    try {
      const response = await http.get<Cliente[]>('/clientes');
      this.clientes.set(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    } finally {
      this.loading.set(false);
    }
  }

  async createCliente(newCliente: Partial<Cliente>): Promise<void> {
    try {
      const response = await http.post<Cliente>('/clientes', newCliente);

      this.clientes.update((lista: Cliente[]) => [...lista, response.data]);
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
    }
  }

  async updateCliente(updatedCliente: Cliente): Promise<void> {
    try {
      const response = await http.put<Cliente>(`/clientes/${updatedCliente.id}`, updatedCliente);

      this.clientes.update((lista: Cliente[]) =>
        lista.map((cliente) => (cliente.id === updatedCliente.id ? response.data : cliente)),
      );
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
    }
  }

  async deleteCliente(id: string): Promise<void> {
    try {
      await http.delete(`/clientes/${id}`);

      this.clientes.update((lista: Cliente[]) => lista.filter((cliente) => cliente.id !== id));
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  }
}
