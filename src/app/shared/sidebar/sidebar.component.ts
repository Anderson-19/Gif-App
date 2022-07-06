import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from '../../gifs/interface/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial
  }

  constructor( private gifsService: GifsService ) { }

  buscar( gif: string ) {
    this.gifsService.buscarGifs( gif )
  }

}
