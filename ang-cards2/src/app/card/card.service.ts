import { Card } from './card.model';

export class CardService {
  private cards: Card [] = [
    new Card('Innervate', 0 , 'Druid', '../../assets/img/Innervate.png', 'common'),
    new Card('NZoth', 10 , 'Neutral', '../../assets/img/Nzoth.png','legendary'),
    new Card('Abomination', 5 ,'Neutral', '../../assets/img/Abomination.png','rare'),
    new Card('Blade Flurry', 4 ,'Rogue', '../../assets/img/Blade_Flurry.png','rare'),
    new Card('Felfire Potion', 6 , 'Warlock','../../assets/img/Felfire_Potion.png','rare'),
    new Card('King Krush', 9 ,'Hunter', '../../assets/img/King_Krush.png','legendary'),
    new Card('Lord Godfrey', 7 ,'Warlock', '../../assets/img/Lord_Godfrey.png','legendary'),
    new Card('Lunas Pocket Galaxy', 7 ,'Mage', '../../assets/img/Lunas_Pocket_Galaxy.png','legendary'),
    new Card('Mistwraith', 4 ,'Neutral', '../../assets/img/Mistwraith.png','rare'),
    new Card('Reno Jackson', 6 ,'Neutral', '../../assets/img/Reno_Jackson.png','legendary')
  ];

  constructor() {}

  getCards() {
    return this.cards.slice();
  }

}
