import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent {

  pokeChoice! : FormGroup;

  constructor(
    private _nomFormBuilder : FormBuilder,
  ){}

  NgOnInit() {
    this.pokeChoice = this._nomFormBuilder.group({
      nom : [''],
      id : [0],
    })
  }

  onSubmit() {

  }
}
