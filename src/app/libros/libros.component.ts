import { Component, OnInit,OnDestroy } from '@angular/core';
import { librosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit,OnDestroy {
  libros: string[] = [];
  constructor(private librosService: librosService) {}
  private libroSubscription:Subscription | undefined;
  eliminarLibro(libro: any) {}

  guardarLibro(f: any) {
    if (f.valid) {
      this.librosService.agregarLibros(f.value.nombreLibro);
    }
  }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription=  this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy() {
    if (this.libroSubscription) {
      this.libroSubscription.unsubscribe();
    }
  }
}
