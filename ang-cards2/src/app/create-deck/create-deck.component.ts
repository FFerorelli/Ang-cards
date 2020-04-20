import { DataStorageService } from './../shared/data-storage.service';
import { Deck } from "./../deck/deck.model";
import { DeckService } from "./../deck/deck.service";
import { v4 as uuid } from 'uuid';
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { CardService } from "../card/card.service";
import { Card } from "../card/card.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-create-deck",
  templateUrl: "./create-deck.component.html",
  styleUrls: ["./create-deck.component.scss"]
})
export class CreateDeckComponent implements OnInit {
  selectedClass = "";
  selectedClassCards: Card[];
  cardSelected = false;
  cards: Card[];
  newDeck: Deck = new Deck(0, "", "", []);
  classes = [
    "Priest",
    "Mage",
    "Shaman",
    "Rogue",
    "Warrior",
    "Warlock",
    "Druid",
    "Paladin"
  ];


  createDeckForm: FormGroup;
  /*   deckName: FormControl;
  deckClass: FormControl;
  deckCards: FormControl; */
  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
    //this.newDeck = this.deckService.getNewDeck();
    this.createDeckForm = new FormGroup({
      deckName: new FormControl("Meme Deck"),
      deckClass: new FormControl(),
      deckCards: new FormControl()
    });
  }

  onAddCard() {
    this.deckService.addCard(this.newDeck, this.createDeckForm.value.deckCards);
    this.cardSelected = true;
  }
  classSelected() {
    //console.log(this.cardSelected);
    this.selectedClass = this.createDeckForm.value.deckClass;
    this.selectedClassCards = this.cards.filter(
      card => card.hero === this.selectedClass || card.hero === "Neutral"
    );

    console.log(this);
    console.log(this.selectedClassCards);
    console.log(this.selectedClass);
  }

  onSubmit() {
    console.log("submitted");
    this.newDeck.deckName = this.createDeckForm.value.deckName;
    this.newDeck.deckClass = this.createDeckForm.value.deckClass;
    this.newDeck.id = uuid() /* this.deckService.getDecks().length */;
    this.deckService.addNewDeck(this.newDeck);
    this.dataStorageService.storeDecks();
    console.log(this.newDeck.id);
    this.selectedClass = '';
    this.cardSelected = false;
    this.newDeck = new Deck(0, "", "", []);
    this.createDeckForm.reset();

  }
}
