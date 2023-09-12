import { Component } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent {

  monPoke! : Pokemon;

  constructor (
    private _nomPokeService : PokemonService,
  ) {}

  ngOnInit () {
    this._nomPokeService.getById(0).subscribe({

    })
  }




}
