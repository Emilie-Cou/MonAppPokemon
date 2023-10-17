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
    this.pokeChoice = this._nomFormBuilder.group({
      nom : ['', Validators.nullValidator],
      id : [null, Validators.nullValidator],
    })
  }

  submitPokeForm() : void {
    const formPoke = this.pokeChoice.value;

    if (formPoke.nom !== '' && formPoke.id === null) {
      const formNom = formPoke.nom;
      this._nomPokeService.formNomValid = formNom;
    } 
    else 
    if (formPoke.id !== null && formPoke.nom === '') {
      const formId = formPoke.id;   
      this._nomPokeService.formIdValid = formId;
    } 
    else {
      alert('Merci d\'introduire un nom ou un numéro d\'id');
    }
    
    this._nomRouter.navigate(['pokeDetails']);
  }
}
