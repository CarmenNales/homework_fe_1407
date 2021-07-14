const { question } = require("readline-sync");
const { displayWordSoFar, getWrongGuesses, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {

  const letter = question("Raad een letter: ").toLowerCase();


  if (letter.length !== 1) {
    console.error("Foutmelding: Voer hier 1 letter in");
    return game(word, guesses);
  }

  if (guesses.includes(letter)) {
    console.error("Foutmelding: Deze letter heb je al gebruikt");
    return game(word, guesses);
  }

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  const displayWord = displayWordSoFar(word, guesses)
  const wrongGuesses = getWrongGuesses(word, guesses)
  const tellWrongNumbers = wrongGuesses.length
  const isLost = isGameLost(word, wrongGuesses)
  const isWon = isGameWon(word, displayWord)

  console.log(`Jouw woord is: ${displayWord}`)
  console.log(`Deze letters zitten niet in het woord: ${wrongGuesses}, aantal fouten: ${ tellWrongNumbers }.`)

  if (isLost) {
    console.log("Je hebt teveel fouten gemaakt, je hebt verloren");
    return;
  }

  if (isWon) {
    console.log("Gefeliciteerd, je hebt gewonnen!");
    return;
  }

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);