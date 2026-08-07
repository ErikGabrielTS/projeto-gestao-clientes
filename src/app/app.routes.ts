import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TabelaClientes } from './components/tabela-clientes/tabela-clientes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },

  {
    path: 'consultaClientes',
    component: TabelaClientes,
  },
];
