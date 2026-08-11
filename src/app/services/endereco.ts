import { Injectable, signal } from '@angular/core';
import { Estado } from '../types/estado';
import axios from 'axios';
import { Municipio } from '../types/Municipio';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  async getEstados(): Promise<Estado[]> {
    try {
      const response = await axios.get<Estado[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      );

      return response.data.map((item) => ({
        id: item.id,
        sigla: item.sigla,
        nome: item.nome,
      }));
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
      return [];
    }
  }

  async getMunicipios(ufId: number): Promise<Municipio[]> {
    try {
      const response = await axios.get<Municipio[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios`,
      );
      return response.data.map((item) => ({
        id: item.id,
        nome: item.nome,
      }));
    } catch (error) {
      console.error('Erro ao buscar municípios:', error);
      return [];
    }
  }
}
