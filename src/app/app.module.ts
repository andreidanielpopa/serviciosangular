import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/services.comics';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsPadreComponent } from './components/comics-padre/comics-padre.component';
import { ComicHijoComponent } from './components/comic-hijo/comic-hijo.component';
import { ServicePersonas } from './services/service.persona';

@NgModule({
  declarations: [
    AppComponent,
    ComicsPadreComponent,
    ComicHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceComics, ServicePersonas],
  bootstrap: [AppComponent]
})
export class AppModule { }
