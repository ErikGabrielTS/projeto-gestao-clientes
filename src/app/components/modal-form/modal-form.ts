import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  imports: [FormsModule],
  templateUrl: './modal-form.html',
  styleUrl: './modal-form.css',
})
export class ModalForm {
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
    console.log('Dados cadastrados:', this.formData);

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
