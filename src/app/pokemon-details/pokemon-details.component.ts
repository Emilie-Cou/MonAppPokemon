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
    this._nomPokeService.getById(25).subscribe({
      next : (data) => {
        this.monPoke = {
          name : data.name,
          id : data.id,
          type : data.type,
          order : data.order,
          height : data.height,
          weight : data.weight,
          base_experience : data.base_experience,
          is_default : data.is_default,
          statistique : data.statistique,
        }
        console.log(this.monPoke);
      }
    })
  }




}
