import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[]=[];

  constructor() {
    console.log("servicio Creado")
  }
}
