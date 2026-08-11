import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente';
import { Cliente } from '../../types/cliente';
import { EnderecoService } from '../../services/endereco';
import { Estado } from '../../types/estado';
import { Municipio } from '../../types/Municipio';

@Component({
  selector: 'app-modal-form',
  imports: [FormsModule],
  templateUrl: './modal-form.html',
  styleUrl: './modal-form.css',
})
export class ModalForm {
  private clienteService = inject(ClienteService);
  private enderecoService = inject(EnderecoService);
  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialogElement');

  isEdit = false;
  formData: Cliente = {
    id: '',
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    uf: null,
    municipio: null,
  };
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor() {
    this.loadEstados();
  }

  loadEstados(): void {
    this.enderecoService.getEstados().then((estados) => {
      this.estados = estados;
    });
  }

  loadMunicipios(ufId: number | undefined): void {
    if (!ufId) {
      this.municipios = [];
      return;
    }

    this.enderecoService.getMunicipios(ufId).then((municipios) => {
      this.municipios = municipios;
    });
  }

  openModal(): void {
    this.dialog().nativeElement.showModal();
  }

  closeModal(): void {
    this.dialog().nativeElement.close();
    this.resetForm();
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.clienteService.updateCliente(this.formData);
    } else {
      this.clienteService.createCliente(this.formData);
    }

    this.closeModal();
  }

  onEdit(cliente: Cliente): void {
    this.formData = { ...cliente };
    this.isEdit = true;
    this.openModal();
  }

  private resetForm(): void {
    this.formData = {
      id: '',
      nome: '',
      email: '',
      cpf: '',
      dataNascimento: '',
      uf: null,
      municipio: null,
    };

    this.isEdit = false;
  }
}
