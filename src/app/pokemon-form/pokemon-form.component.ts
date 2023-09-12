import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})

export class PokemonFormComponent {

  pokeChoice! : FormGroup;

  constructor (
    private _nomFormBuilder : FormBuilder,
    private _nomRouter : Router,
  ){}

  ngOnInit() {
    console.log('je ngoninit');
    this.pokeChoice = this._nomFormBuilder.group({
      nom : ['', Validators.nullValidator],
      id : [null, Validators.nullValidator],
    })
  }

  submitPokeForm() {
    console.log('je submit');
    const formPoke = this.pokeChoice.value;
    console.log(formPoke['nom']);
    console.log(formPoke['id']);
    this._nomRouter.navigate(['pokeDetails']);
  }
}
