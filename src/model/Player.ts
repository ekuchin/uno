import Card from "@/model/Card";

export default interface Player {
  name: string;
  cards: Card[];
  points: number;
  isHuman: boolean;
}

export function createPlayer(name:string, isHuman:boolean):Player{
  const newPlayer = {} as Player;
  newPlayer.name = name;
  newPlayer.points = 0;
  newPlayer.cards = [] as Card[];
  newPlayer.isHuman = isHuman;
  return newPlayer;
}