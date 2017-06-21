import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.services';
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(
    private _listaDeseos:ListaDeseosService,
    private navController:NavController
  ) {  }

  ngOnInit() {}

  irAgregar(){
    // importando el NavController controlamos la nevagación haciendo push sobre el array de componentes
    this.navController.push(AgregarComponent);
  }
}
