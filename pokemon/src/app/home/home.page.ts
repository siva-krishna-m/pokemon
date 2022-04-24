import { PokemonService } from './../services/pokemon.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonsList: any;
  nextItemsUrl: any;
  offset: number;
  totalCount: any;
  searchText: string = '';

  constructor(
    private pokemonService: PokemonService,
    private toastController: ToastController
  ) {
    this.pokemonService.getPokemon().subscribe((res: any) => {
      this.pokemonsList = res.results;
      this.nextItemsUrl = res.next;
      this.totalCount = res.count;
    });
  }

  goTo(page) {
    let url = new URL(this.nextItemsUrl);
    this.offset = Number(url.searchParams.get('offset'));
    if (page == 'previous' && this.offset > 20) {
      let offset = this.offset - 40;
      this.pokemonService
        .getPokemon({ offset, limit: 20 })
        .subscribe((res: any) => {
          this.pokemonsList = res.results;
          this.nextItemsUrl = res.next;
        });
    } else if (page == 'next' && this.offset < this.totalCount) {
      this.pokemonService
        .getPokemon({ offset: this.offset, limit: 20 })
        .subscribe((res: any) => {
          this.pokemonsList = res.results;
          this.nextItemsUrl = res.next;
        });
    } else {
      let toast = this.toastController.create({
        message: 'Not available',
        duration: 1000,
        icon: 'information-circle',
        position: 'top',
        color: 'danger'
      });
      toast.then((a) => a.present());
    }
  }
}
