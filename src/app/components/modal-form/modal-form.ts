import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente';
import { Cliente } from '../../types/cliente';

@Component({
  selector: 'app-modal-form',
  imports: [FormsModule],
  templateUrl: './modal-form.html',
  styleUrl: './modal-form.css',
})
export class ModalForm {
  private clienteService = inject(ClienteService);
  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialogElement');

  isEdit = false;
  formData: Cliente = {
    id: '',
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    uf: '',
    municipio: '',
  };

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
      uf: '',
      municipio: '',
    };

    this.isEdit = false;
  }
}
