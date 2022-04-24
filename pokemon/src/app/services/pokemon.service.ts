import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // baseUrl = "https://pokeapi.co/api/v2/pokemon/";

constructor(private http: HttpClient) { }

  getPokemon(params?: any) {
    return this.http.get(environment.baseUrl, {params})
  }

}
