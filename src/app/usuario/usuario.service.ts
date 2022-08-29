import{Injectable} from'@angular/core';
import{ usuario } from'./usuario.model';

@Injectable()
export class usuarioService{
getusuario(): usuario[] {
  throw new Error('Method not implemented.');
}
nuevousuario(): usuario {
  throw new Error('Method not implemented.');
}

private usuario!:usuario[];

agregarusuario(usuario: usuario): void{
this.usuario.push(usuario);
}
}

