import { Component, Input,EventEmitter,Output } from '@angular/core';
import { librosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro: string | undefined;

 @Output() libroClicked=new EventEmitter();


 constructor(private librosService:librosService){

 }

  onclicked(){

   // this.libroClicked.emit();
   if (this.tituloLibro) {
    this.librosService.eliminarLibro(this.tituloLibro);
  }

  }
}
