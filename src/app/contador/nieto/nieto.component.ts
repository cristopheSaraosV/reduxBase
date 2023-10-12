import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ContadorActions from '../../Redux/contador/contador.actions'
import { AppState } from 'src/app/Redux/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent implements OnInit{
  contador!: number;

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador)
  }

  multiplicar() {
    this.store.dispatch(ContadorActions.Multiplicar({payload:3}));
  };

  dividir() {
    this.store.dispatch(ContadorActions.Dividir({payload:3}));
  };

  reset() {
    this.store.dispatch(ContadorActions.Reset());
  };
}
