import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-hijo',
  templateUrl: './comic-hijo.component.html',
  styleUrl: './comic-hijo.component.css'
})
export class ComicHijoComponent {
  @Input() comic!: Comic;

  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo(): void {
    this.seleccionarFavoritoPadre.emit(this.comic);
  }

}
