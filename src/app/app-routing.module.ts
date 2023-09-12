import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ConsigneComponent } from './consigne/consigne.component';
import { HomeComponent } from './home/home.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consigne', component: ConsigneComponent },
  { path: 'pokeChoice', component: PokemonFormComponent },
  { path: 'pokeDetails', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
