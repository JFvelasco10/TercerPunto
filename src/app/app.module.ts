import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { DecoradorTituloPipe } from './utiles/decorador-titulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PadreComponent,
    DecoradorTituloPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
