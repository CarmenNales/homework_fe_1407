// Functies om de ingevoerde letters van het te raden woord weer te geven
function displayWordSoFar(word, guesses) {

  // Variabele voor het opslaan van het te raden woord
  let displayedWord = "";

  // For loop door de letters van het te raden woord
  // En controleer of de letter van de speler juist is
  for (let i = 0; i < word.length; i++) {
    let guessedLetter = false;

    // For loop door de ingevoerde letters van de gebruiker
    for (let j = 0; j < guesses.length; j++) {
      if (guesses[j] === word[i]) {
        displayedWord += guesses[j];
        guessedLetter = true;
        break;
      }
    }

    // Als de ingevoerde letter niet in het woord voor komt, voer _ in displayedWord in
    if (!guessedLetter) {
      displayedWord += "_";
    }

    // Zet een spatie achter elk teken die geplaatst wordt in displayedWord
    displayedWord += " ";
  }
  return displayedWord;
}

// Tel het aantal verkeerd ingevoerde letters
function getWrongGuesses(word, guesses) {
  let wrongLetters= [];

  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i])) {
      wrongLetters.push(guesses[i]);
    }
  }
  return wrongLetters;
}

// Controleer of de speler het spel gewonnen heeft
function isGameWon(word, guesses) {
  let displayWord = displayWordSoFar(word, guesses);
  displayWord = displayWord.split(" ").join("");
  return word === displayWord;
}

// Controleer of de speler het spel verloren heeft
function isGameLost(word, guesses) {
  let wrongGuesses = getWrongGuesses(word, guesses);
  const maxWrongNumbers = 7;
  return wrongGuesses.length >= maxWrongNumbers;
}

// Exporteer de functies
module.exports = {
  displayWordSoFar: displayWordSoFar,
  getWrongGuesses: getWrongGuesses,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};