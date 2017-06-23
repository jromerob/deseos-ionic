import { Pipe, PipeTransform } from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';


@Pipe({
  name: 'pendientes',
  pure:false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], pendiente: boolean=true): Lista[] {

    let listaFiltrada: Lista[]=[];

    for (let lista of listas) {
      if (lista.terminada == !pendiente) {
        listaFiltrada.push(lista);
      }
    }
    return listaFiltrada;
  }
}
