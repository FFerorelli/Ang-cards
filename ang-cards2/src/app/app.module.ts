import { DeckService } from "./deck/deck.service";
import { CardService } from "./card/card.service";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./card/card.component";
import { CardListComponent } from "./card-list/card-list.component";
import { DeckComponent } from "./deck/deck.component";
import { DeckListComponent } from "./deck-list/deck-list.component";
import { CreateDeckComponent } from "./create-deck/create-deck.component";
import { DeckItemComponent } from "./deck-list/deck-item/deck-item.component";
import { DeckDetailsComponent } from "./deck-list/deck-details/deck-details.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardListComponent,
    DeckComponent,
    DeckListComponent,
    CreateDeckComponent,
    DeckDetailsComponent,
    DeckItemComponent,
    DeckDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CardService, DeckService],
  bootstrap: [AppComponent]
})
export class AppModule {}
