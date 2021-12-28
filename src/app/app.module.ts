import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MakeupComponent } from './makeup/makeup.component';
import { AddMakeupComponent } from './add-makeup/add-makeup.component';
import { UpdateMakeupComponent } from './update-makeup/update-makeup.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    MakeupComponent,
    AddMakeupComponent,
    UpdateMakeupComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
