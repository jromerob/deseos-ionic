import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[]=[];

  constructor() {
    this.cargarData();
    console.log("servicio Creado")
  }


/* localStorage sólo almacens Strings por lo que convertimos el objeto listas en un JSON */
  actualizarData(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

/* Como lo que recuperamos es un String, tenemos que hacer un parse de este */
  cargarData(){
    if (localStorage.getItem("data"))  this.listas=JSON.parse(localStorage.getItem("data"));
  }


/* para agregar una lista, la añadimos al array de listas y actualizamos el storage */
  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }
}
