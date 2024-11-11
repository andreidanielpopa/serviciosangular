import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/services.comics';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsPadreComponent } from './components/comics-padre/comics-padre.component';
import { ComicHijoComponent } from './components/comic-hijo/comic-hijo.component';
import { ServicePersonas } from './services/service.persona';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';
import { ServicePlantilla } from './services/service.plantilla';

@NgModule({
  declarations: [
    AppComponent,
    ComicsPadreComponent,
    ComicHijoComponent,
    PersonasComponent,
    MenuComponent,
    CochesComponent,
    PlantillaFuncionSimpleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasstandaloneComponent
  ],
  providers: [ServiceComics, ServicePersonas, provideHttpClient(withFetch()), ServiceCoches, ServicePlantilla],
  bootstrap: [AppComponent]
})
export class AppModule { }
