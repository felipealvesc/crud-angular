import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { UsersComponent } from './users/users.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';


const routes: Routes = [
  {path: 'pagina1', component: Pagina1Component},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'users', component: UsersComponent},
  {path: 'primeiro-componente', component: PrimeiroComponenteComponent},
  {path: 'users/create', component: CreateUserComponent},
  {path: 'users/update/:id', component: UpdateUserComponent},
  {path: 'users/delete/:id', component: DeleteUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
