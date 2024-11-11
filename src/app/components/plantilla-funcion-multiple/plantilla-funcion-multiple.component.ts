import { PlantillaFuncion } from './../../models/plantillafuncion';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
@Component({
  selector: 'app-plantilla-funcion-multiple',
  templateUrl: './plantilla-funcion-multiple.component.html',
  styleUrl: './plantilla-funcion-multiple.component.css'
})
export class PlantillaFuncionMultipleComponent implements OnInit {

  @ViewChild('selectFunciones') cajaSelect!: ElementRef;

  public plantillas!: Array<string>;
  public funciones!: Array<PlantillaFuncion>;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service: ServicePlantilla) {
    this.funcionesSeleccionadas = new Array<string>();
  }

  ngOnInit(): void {
    this._service.getPlantilla().subscribe(response => {
      this.plantillas = response;
    })
  }

  verFuncionPlantilla() {
    let aux = new Array<string>();

    for (var option of this.cajaSelect.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }

    this.funcionesSeleccionadas = aux;

    this._service.getPlantillFunciones(this.funcionesSeleccionadas).subscribe(response => {
      this.funciones = response;
    })
  }
}
