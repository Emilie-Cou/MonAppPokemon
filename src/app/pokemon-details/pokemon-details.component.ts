import { Component } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonService } from '../shared/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent {

  monPoke! : Pokemon;

  constructor (
    private _nomPokeService : PokemonService,
    private _nomRouter : Router,
  ) {}

  ngOnInit () {
    if (this._nomPokeService.formIdValid) {
      this._nomPokeService.getById(this._nomPokeService.formIdValid).subscribe({
        next : (data) => {
          this.monPoke = {
            name : data.name,
            id : data.id,
            type : data.types.map((data: { type: { name: any; }; }) => 
              data.type.name
              ),
            order : data.order,
            height : data.height,
            weight : data.weight,
            base_experience : data.base_experience,
            is_default : data.is_default,
            statistique : data.stats.map((data: { stat: { name: string; }; base_stat: string; }) => 
              data.stat.name + ': ' + data.base_stat
              ),
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
            type : data.types.map((data: { type: { name: any; }; }) => 
              data.type.name
              ),
            order : data.order,
            height : data.height,
            weight : data.weight,
            base_experience : data.base_experience,
            is_default : data.is_default,
            statistique : data.stats.map((data: { stat: { name: string; }; base_stat: string; }) => 
              data.stat.name + ': ' + data.base_stat
              ),
            stripe : data.sprites.front_default,
          }
        }
      })
    }
  }

  goToPokeChoice() : void {
    this._nomRouter.navigate(['pokeChoice']);
  }
}
