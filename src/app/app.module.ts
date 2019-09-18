import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { FormsModule } from "@angular/forms";
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    Pagina1Component,
    Pagina2Component,
    UsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
