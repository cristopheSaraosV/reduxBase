import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Redux/app.reducers';
import * as ContadorActions from '../../Redux/contador/contador.actions'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit{

  contador!: number;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  };

  multiplicar() {
    this.store.dispatch(ContadorActions.Multiplicar({payload:2}))
  };

  dividir() {
    this.store.dispatch(ContadorActions.Dividir({payload:2}))
  };

}
