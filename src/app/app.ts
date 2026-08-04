import { Component, signal } from '@angular/core';
import { FabAdd } from './components/fab-add/fab-add';
import { Cliente } from './types/cliente';

@Component({
  selector: 'app-root',
  imports: [FabAdd],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
