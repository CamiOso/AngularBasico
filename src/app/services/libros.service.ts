export class librosService {
  private libros:string[]= [
    'Libro de Vaxi',
    'Libro de Aritmetica',
    'El Grafico Revista',
  ];

  agregarLibros(libroNombre:string) {
    this.libros.push(libroNombre);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
