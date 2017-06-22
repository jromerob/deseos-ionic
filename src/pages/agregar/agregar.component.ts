import { Component, OnInit } from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';


@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem = "";
  items: ListaItem[] = [];

  constructor(
    public alertController: AlertController,
    public navController: NavController,
    public listaDeseosService: ListaDeseosService
  ) { }

  ngOnInit() { }

  agregarItem() {

    if (this.nombreItem.length == 0) {
      return;
    }

    let items = new ListaItem();
    items.nombre = this.nombreItem;
    this.items.push(items);
    this.nombreItem = ""
  }

  eliminarItem(index: number) {

    this.items.splice(index, 1);

  };

  guardarLista() {

    if (this.nombreLista.length == 0) {
      let alert = this.alertController.create({
        title: 'Error',
        subTitle: 'Debe indicar el nombre de la lista',
        buttons: ['OK']
      });
      alert.present()
      return;
    }
    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

  /*  this.listaDeseosService.listas.push(lista);*/
    this.listaDeseosService.agregarLista(lista);
    this.navController.pop();
  };


}
