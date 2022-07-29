export function getPlayers(numberOfPlayers: number) {
  console.assert(numberOfPlayers > 0);

  let names = ["Joey", "Phoebe", "Ross", "Rachel", "Monica"];

  return names.splice(0, numberOfPlayers).map((name) => ({
    name: name,
    score: 0,
  }));
}
