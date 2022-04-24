import { MovesComponent } from './moves/moves.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SearchPipe } from './../helpers/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SearchPipe, PokemonDetailsComponent, MovesComponent]
})
export class HomePageModule {}
