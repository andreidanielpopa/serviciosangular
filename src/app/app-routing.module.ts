import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { ComicsPadreComponent } from './components/comics-padre/comics-padre.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';

const routes: Routes = [
  {
    path:'', component:PersonasComponent
  },
  {
    path:'comics', component:ComicsPadreComponent
  },
  {
    path:'coches', component:CochesComponent
  },
  {
    path:'plantilla', component:PlantillaFuncionSimpleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
