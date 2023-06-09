class Card {
  constructor(type) {
    this.type = type;
  }
}

export default function createDeck(lv3, lv4, lv5, lv6, lv7, options, tamers) {
  let deck = []

  for (let i = 0; i < lv3; i++) {
    deck.push(new Card("lv3"))
  }

  for (let i = 0; i < lv4; i++) {
    deck.push(new Card("lv4"))
  }

  for (let i = 0; i < lv5; i++) {
    deck.push(new Card("lv5"))
  }

  for (let i = 0; i < lv6; i++) {
    deck.push(new Card("lv6"))
  }

  for (let i = 0; i < lv7; i++) {
    deck.push(new Card("lv7"))
  }

  for (let i = 0; i < options; i++) {
    deck.push(new Card("option"))
  }

  for (let i = 0; i < tamers; i++) {
    deck.push(new Card("tamer"))
  }

  return deck
  
}
