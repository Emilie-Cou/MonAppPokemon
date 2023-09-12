import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  urlPoke : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private _nomHttpClient : HttpClient) { }

  getById (idPoke : number) : Observable<any> {
    return this._nomHttpClient.get<any>(this.urlPoke + idPoke)
  }
  
  getByNom (nomPoke : string) : Observable<any> {
    return this._nomHttpClient.get<any>(this.urlPoke + nomPoke)
  }
}
