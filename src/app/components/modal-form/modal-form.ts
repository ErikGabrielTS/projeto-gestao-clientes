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

  formData = {
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
  }

  onSubmit(): void {
    const novoCliente: Cliente = {
      nome: this.formData.nome,
      email: this.formData.email,
      cpf: this.formData.cpf,
      dataNascimento: this.formData.dataNascimento,
      uf: this.formData.uf,
      municipio: this.formData.municipio,
    };

    this.clienteService.createCliente(novoCliente);
    this.closeModal();
  }

  handleDialogClose(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.formData = {
      nome: '',
      email: '',
      cpf: '',
      dataNascimento: '',
      uf: '',
      municipio: '',
    };
  }
}
