import Card from "@/model/Card"

export default interface Player {
    name: String;
    cards: Card[];
    points: Number;
    isHuman: Boolean;
  }