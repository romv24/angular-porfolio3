import{usuario} from'./../usuario.model';
import{usuarioService} from'./../usuario.service';
import{Component} from'@angular/core';
import{OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector:"app-alta-usuario",
templateUrl:"./alta-usuario.component.html",
styleUrls:["./alta-usuario.component.css"]
})

export class AltausuarioComponent implements OnInit{
  usuario!: usuario;
  password!: usuario;
constructor(private usuarioService:usuarioService, router: Router){}

ngOnInit(): void{
  this.usuario = this.usuarioService.nuevousuario();
}
  nuevousuario(): void{
  this.usuarioService.agregarusuario(this.usuario);
  this.usuario = this.usuarioService.nuevousuario();
  }
  reload(){
  // any other execution
  this.ngOnInit()
}
}