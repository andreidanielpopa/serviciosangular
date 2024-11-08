import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/services.comics';

@Component({
  selector: 'app-comics-padre',
  templateUrl: './comics-padre.component.html',
  styleUrl: './comics-padre.component.css'
})
export class ComicsPadreComponent implements OnInit {
  public comics!: Array<Comic>;
  public mensaje!: string;

  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaimagen') cajaImagenRef!: ElementRef;
  @ViewChild('cajadescripcion') cajaDescripcionRef!: ElementRef;

  constructor(
    private _service: ServiceComics
  ) { }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  seleccionarFavoritoPadre(event: Comic): void {
    console.log('Dato: ' + event.nombre);
    this.mensaje = 'Comic favorito ' + event.nombre;
  }

  crearComic() {
    let nuevoComic = null;
    nuevoComic = new Comic(this.cajaNombreRef.nativeElement.value, this.cajaImagenRef.nativeElement.value, this.cajaDescripcionRef.nativeElement.value);

    this.comics.push(nuevoComic);
  }
}
