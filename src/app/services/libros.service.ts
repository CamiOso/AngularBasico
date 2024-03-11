import { Subject } from 'rxjs';



export class librosService {

  librosSubject=new Subject<string>();

  private libros:string[]= [
    'Libro de Vaxi',
    'Libro de Aritmetica',
    'El Grafico Revista',
  ];

  agregarLibros(libroNombre:string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(libroNombre);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
