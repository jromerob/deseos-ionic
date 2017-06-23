import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Lista, ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listaDeseosService: ListaDeseosService,
    public alertCtrl: AlertController
  ) {
    this.idx = navParams.get("idx");
    this.lista = navParams.get("lista");
    console.log(navParams)
  }

  ngOnInit() { }

  actualizar(item: ListaItem) {
    item.completado = !item.completado
    let listaCompletada:boolean=true;
    for (let item of this.lista.items){
      if (!item.completado){
        listaCompletada=false;
        break
      }
    }
    this.lista.terminada=listaCompletada;
    this.listaDeseosService.actualizarData();
  };

  eliminarLista() {
    let alert = this.alertCtrl.create({
   title: this.lista.nombre,
   message: '¿ Seguro que quiere eliminar la lista ?',
   buttons: ['Cancelar'
     ,
     {
       text: 'Eliminar',
       handler: () => {
         this.listaDeseosService.eliminarLista(this.idx);
         this.navCtrl.pop();
       }
     }
   ]
 });
 alert.present();

  }

}
