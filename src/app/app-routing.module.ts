import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltausuarioComponent } from './usuario/alta-usuario/alta-usuario.component';
import { paginausuarioComponent } from './usuario/pagina-usuario/pagina-usuario.component';

const routes: Routes = [{
  path: 'altausuario',
  component: AltausuarioComponent
  },
  {
    path:'paginausuario',
    component: paginausuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
