import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Lista, ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';



@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listaDeseosService: ListaDeseosService
  ) {
    this.idx = navParams.get("idx");
    this.lista = navParams.get("lista");
    console.log(navParams)
  }

  ngOnInit() { }

  actualizar(item: ListaItem) {
    item.completado = !item.completado
    this.listaDeseosService.actualizarData();
  };

  eliminarLista() {
    this.listaDeseosService.eliminarLista(this.idx);
    this.navCtrl.pop();
  }
}
