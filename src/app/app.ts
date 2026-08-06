import { Component } from '@angular/core';
import { FabAdd } from './components/fab-add/fab-add';
import { TabelaClientes } from './components/tabela-clientes/tabela-clientes';

@Component({
  selector: 'app-root',
  imports: [FabAdd, TabelaClientes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
