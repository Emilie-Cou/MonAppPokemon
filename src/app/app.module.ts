import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsigneComponent } from './consigne/consigne.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsigneComponent,
    PokemonDetailsComponent,
    NavbarComponent,
    HomeComponent,
    PokemonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
