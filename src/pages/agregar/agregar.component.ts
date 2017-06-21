import { Component, OnInit } from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem = "";
  items: ListaItem[] = [];

  constructor() { }

  ngOnInit() { }

  agregarItem() {

    if (this.nombreItem.length == 0) {
      return;
    }

    let items = new ListaItem();
    items.nombre=this.nombreItem;
    this.items.push(items);
    this.nombreItem = ""
  }

  eliminarItem(index:number) {

    this.items.splice(index,1);

  }
}
