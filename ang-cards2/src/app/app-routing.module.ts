import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardListComponent} from './card-list/card-list.component';
import { DeckListComponent } from "./deck-list/deck-list.component";
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { from } from 'rxjs';
import { DeckItemComponent } from './deck-list/deck-item/deck-item.component';
import { DeckDetailsComponent } from './deck-list/deck-details/deck-details.component';

const appRoutes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'decks', component: DeckListComponent, children: [
    { path: ':id/:deckName', component: DeckDetailsComponent }
  ] },
  { path: 'createDeck', component: CreateDeckComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
