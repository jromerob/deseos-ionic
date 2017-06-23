import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(
    private _listaDeseos: ListaDeseosService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  irAgregar() {
    // importando el NavController controlamos la nevagación haciendo push sobre el array de componentes
    this.navController.push(AgregarComponent);
  }

  verDetalle(lista, idx) {
    /* envío de parametros a una pantalla */
    this.navController.push(DetalleComponent, { lista, idx });
  }
}
