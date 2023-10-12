import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment.development';
import { EffectsModule } from '@ngrx/effects';
import { reducer as contadorReducer } from './contador/contador.reducer';
import { notificationEffect } from './notification.effects';
import { reducer as editorReducer } from './editor/editor.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      contador : contadorReducer,
      editor   : editorReducer
    }),
    EffectsModule.forRoot([notificationEffect]),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production
    }),
  ]
})
export class ReduxModule { }
