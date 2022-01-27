export enum Color {
    Black,    
    Red,
    Yellow,
    Green,
    Blue
  }

export enum Rank {
    Zero,
    One, 
    Two,
    Three,
    Four,
    Five,
    Six, 
    Seven, 
    Eight, 
    Nine,
    Skip,
    Plus2,
    Reverse,
    Plus4,
    SelectColor
}

export function EnumToArray(arr:any){ 
  return Object.keys(arr).filter(value => isNaN(Number(value)) === true)
}

export default interface Card {
  rank: Rank;
  color: Color;
}