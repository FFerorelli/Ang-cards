import { Component, OnInit, NgModule } from "@angular/core";
import { Card } from "../card/card.model";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { CardService } from "../card/card.service";
import { FormsModule } from "@angular/forms";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  cards: Card[];
  searchByName = '';
  searchByCost: number;
  filteredCards: Card[];
  filters: FormControl;
  rarityFilter: FormControl;
  selectedFilter = '';

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
    this.filters = new FormControl();
    this.rarityFilter = new FormControl();
    this.filteredCards = this.cards;

   // console.log('cards', this.cards);
   // this.filterByName();
  }

  chooseFilter() {
    this.selectedFilter = this.filters.value;
    console.log(this.selectedFilter);
  }

  filterByName() {
    this.filteredCards = this.cards.filter(
      card => card.name.toLowerCase().includes(this.searchByName.toLowerCase())
    );
   // console.log('filteredCards', this.filteredCards);
  }
  filterByCost() {
    this.filteredCards = this.cards.filter(
      card => card.manaCost == this.searchByCost
    );
    console.log('filteredCards', this.filteredCards);
  }
  filterByRarity() {
    this.filteredCards = this.cards.filter(
      card => card.rarity === this.rarityFilter.value
    );
  }
}
