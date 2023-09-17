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
    if (this._nomPokeService.formIdValid) {
      this._nomPokeService.getById(this._nomPokeService.formIdValid).subscribe({
        next : (data) => {
          this.monPoke = {
            name : data.name,
            id : data.id,
            type : data.types[0].type.name,
            order : data.order,
            height : data.height,
            weight : data.weight,
            base_experience : data.base_experience,
            is_default : data.is_default,
            statistique : data.stats[1].stat.name + ': ' + data.stats[1].base_stat,
            stripe : data.sprites.front_default,
          }
        }
      })
    } 
    else if (this._nomPokeService.formNomValid) {
      this._nomPokeService.getByNom(this._nomPokeService.formNomValid).subscribe({
        next : (data) => {
          this.monPoke = {
            name : data.name,
            id : data.id,
            type : data.types[0].type.name,
            order : data.order,
            height : data.height,
            weight : data.weight,
            base_experience : data.base_experience,
            is_default : data.is_default,
            statistique : data.stats[1].stat.name + ': ' + data.stats[1].base_stat,
            stripe : data.sprites.front_default,
          }
        }
      })
    }
  }




}
