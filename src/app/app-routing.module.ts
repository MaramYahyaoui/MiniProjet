import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMakeupComponent } from './add-makeup/add-makeup.component';
import { LoginComponent } from './login/login.component';
import { MakeupComponent } from './makeup/makeup.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { MakeupGuard } from './services/makeup.guard';
import { UpdateMakeupComponent } from './update-makeup/update-makeup.component';

const routes: Routes = [
  {path:'makeup',component : MakeupComponent},
  {path:'add-makeup',component : AddMakeupComponent},
  { path: "", redirectTo: "makeup", pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: "updateMakeup/:id", component: UpdateMakeupComponent, canActivate:[MakeupGuard]},
  {path: 'forbidden', component: ForbiddenComponent},
  {path : "add-makeup", component : AddMakeupComponent, canActivate:[MakeupGuard]},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
