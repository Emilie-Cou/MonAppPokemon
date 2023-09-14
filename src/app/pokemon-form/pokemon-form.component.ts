import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from '../shared/services/pokemon.service';

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
    private _nomPokeService : PokemonService,
  ){}

  ngOnInit() {
    console.log('je ngoninit');
    this.pokeChoice = this._nomFormBuilder.group({
      nom : ['', Validators.nullValidator],
      id : [null, Validators.nullValidator],
    })
  }

  submitPokeForm() : void {
    console.log('je submit');
    const formPoke = this.pokeChoice.value;
    console.log(formPoke);

    if (formPoke.id !== null) {
      const formId = formPoke.id;   
      this._nomPokeService.formIdValid = formId;
    } 
    else 
    if (formPoke.nom !== '') {
      const formNom = formPoke.nom;
      this._nomPokeService.formNomValid = formNom;
    } 
    else {
      console.log('Il y a un problème dans le submit');
    }
    
    this._nomRouter.navigate(['pokeDetails']);
  }
}
