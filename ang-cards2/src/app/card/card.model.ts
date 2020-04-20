export class Card {
  public name: string;
  public manaCost: number;
  public hero: string;
  public imagePath: string;
  public rarity: string;

  constructor(name: string, manaCost: number, hero: string, imagePath: string, rarity: string) {
    this.name = name;
    this.manaCost = manaCost;
    this.hero = hero;
    this.imagePath = imagePath;
    this.rarity = rarity;
  }
}
