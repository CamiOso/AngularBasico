import { Component } from '@angular/core';
import { librosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {

 libros:string[]=[];
  constructor(private librosService:librosService){
    this.libros=librosService.obtenerLibros();

  }
  eliminarLibro(libro:any){



  }

  guardarLibro(f:any){

    if(f.valid){


    }
  }
}
