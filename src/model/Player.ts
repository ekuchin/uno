import Card from "@/model/Card";

export default interface Player {
  name: string;
  cards: Card[];
  points: number;
  isHuman: boolean;
}
