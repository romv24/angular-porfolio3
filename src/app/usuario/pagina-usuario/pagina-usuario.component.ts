import { usuario } from '../usuario.model';
import{usuarioService}from'./../usuario.service';
import{Component,OnInit}from'@angular/core';

@Component({
  selector:'app-pagina-usuario',
templateUrl:'./pagina-usuario.component.html',
styleUrls:['./pagina-usuario.component.css']
})
export class paginausuarioComponent implements OnInit{
  usuario!: usuario[];
 
constructor(private usuarioService:usuarioService){}
ngOnInit(): void{
this.usuario = 
this.usuarioService.getusuario();
}
}