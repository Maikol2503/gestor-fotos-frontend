import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'agregar', component:AgregarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }