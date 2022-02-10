import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CadastroVagasComponent } from '../cadastro-vagas/cadastro-vagas.component';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

const rotas: Routes = [
  { path: 'mural', component: MuralVagasComponent},
  { path: 'cadastro-vagas', component: CadastroVagasComponent}, 
  { path: 'menu', component: MenuComponent},
  { path: '', redirectTo: '/mural', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
