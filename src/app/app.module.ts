import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReduxModule } from './Redux/redux.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  imports: [BrowserModule, AppRoutingModule, ReduxModule,FormsModule,
  SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
