import { MovesComponent } from './moves/moves.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'pokemon/:pokemonId', component: PokemonDetailsComponent },
  { path: 'moves', component: MovesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
