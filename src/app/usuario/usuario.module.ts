import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import{ usuarioService } from'./usuario.service';
import{ FormsModule } from'@angular/forms';
import { paginausuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { AltausuarioComponent } from './alta-usuario/alta-usuario.component';
@NgModule({
  declarations: [
    AltausuarioComponent,
    paginausuarioComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers:[
   usuarioService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    AltausuarioComponent,
    paginausuarioComponent
    ]
})
export class usuarioModule{};
