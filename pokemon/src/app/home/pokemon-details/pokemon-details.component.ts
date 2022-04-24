import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonId: any;
  pokemonDetails: any;
  abilities: any[];
  forms: any;
  gameIndicies: any;
  moves: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    let sub$ = this.route.params.pipe(
      tap((a) => console.log),
      switchMap((a) => {
        return this.http.get(`${environment.baseUrl}${a.pokemonId}/`);
      })
    );
    sub$.subscribe(
      (r) => (
        (this.pokemonDetails = r),
        (this.abilities = this.pokemonDetails.abilities),
        (this.forms = this.pokemonDetails.forms),
        (this.gameIndicies = this.pokemonDetails.game_indices),
        (this.moves = this.pokemonDetails.moves)
      )
    );
  }

  goToMove(move) {
    this.router.navigate(["/pokemons/moves"], { state: { moveUrl: move.move.url } })
  }

  ngOnInit() {}
}
