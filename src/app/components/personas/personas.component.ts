import { Persona } from './../../models/persona';
import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {

  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas) { }

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      this.personas = response;
    })
  }

}
