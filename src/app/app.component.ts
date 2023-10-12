import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './Redux/app.reducers';
import * as ContadorActions from './Redux/contador/contador.actions'
import * as EditorActions from './Redux/editor/editor.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  contador!: number;
  editor!: string;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe( contador => this.contador = contador);
    this.store.select('editor').subscribe( editor => this.editor = editor);
  }

  incrementar() {
    this.store.dispatch(ContadorActions.Incrementar() );
  };
  
  decrementar() {
    this.store.dispatch(ContadorActions.Decrementar() );
  };

  cambiarEditor(name:string){
    this.store.dispatch(EditorActions.cambiarEditor({payload:name}) )
  };

}
