// Importeer functies
const { question } = require("readline-sync");
const { isUserInputRight, displayWordSoFar, getWrongGuesses, isGameWon, isGameLost, getDrawing } = require("./gamelogic");

// Hoofdfunctie
function game(word, guesses) {

  // Userinput toestaan
  const letter = question("Raad een letter: ").toLowerCase();

  // Controleer of er geen of meer dan 1 letters tegelijk ingevoerd wordt
  if (letter.length !== 1) {
    console.error("Foutmelding: Voer hier 1 letter in");
    return game(word, guesses);
  }

  // Controleer de invoer op dubbele nummers
  if (guesses.includes(letter)) {
    console.error("Foutmelding: Deze letter heb je al gebruikt");
    return game(word, guesses);
  }

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // Roep de functies aan en sla ze op in een variabele
  const rightLetter = isUserInputRight(word, letter)
  const displayWord = displayWordSoFar(word, guesses);
  const wrongGuesses = getWrongGuesses(word, guesses);
  const tellWrongNumbers = wrongGuesses.length;
  const drawing = getDrawing(rightLetter, tellWrongNumbers);
  const isLost = isGameLost(word, wrongGuesses);
  const isWon = isGameWon(word, displayWord);

  // Log informatie voor de speler
  console.log(`Het woord is nu: ${displayWord}`);
  console.log(`Deze letters zitten niet in het woord: ${wrongGuesses}, aantal fouten: ${ tellWrongNumbers }.`);
  console.log(drawing)
  console.log("****************************************************************")

  // Controleer of de speler verloren heeft
  if (isLost) {
    console.log("Je hebt teveel fouten gemaakt, je hebt verloren");
    return;
  }

  // Controleer of de speler gewonnen heeft
  if (isWon) {
    console.log("Gefeliciteerd, je hebt gewonnen!");
    return;
  }

  // Indien isWon & isLost false zijn, ga door met spelen
  game(word, guesses);
}


// Log begin van het Galgje spel in de terminal en start het spel
console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
==========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝

****************************************************************
                          START SPEL
****************************************************************
          
            __________  
            | /         
            |/       
            |          
            |        
            |           
            =========== 
            
****************************************************************     `);

game("javascript", []);