import { shuffle } from "./shuffle";

export function getPlayers(numberOfPlayers: number) {
  console.assert(numberOfPlayers > 0);

  let names = ["Joey", "Ross", "Rachel", "Monica", "Phoebe"];

  return shuffle(names)
    .splice(0, numberOfPlayers)
    .map((name) => ({
      name: name,
      score: 0,
    }));
}
