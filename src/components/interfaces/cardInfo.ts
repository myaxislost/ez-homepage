export interface Card {
  url: string;
  title: string;
  icon: string;
}

export interface CardGroup {
  title?: string;
  icon?: string;
  cards: Card[];
}

export type Config = CardGroup[];
