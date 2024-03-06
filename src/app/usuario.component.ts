
import { Component} from "@angular/core";


@Component ({

  selector:'app-usuario',
  templateUrl: './usuario.component.html'



})

export class UsuarioComponent {
  usuarios=[ 'Luis','Fernando','Maria']
  usuarioNombre='';

  onAgregarUsuario(){

    this.usuarios.push(this.usuarioNombre);

  }

}
