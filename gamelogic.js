function displayWordSoFar(word, guesses) {
  let displayedWord = "";

  for (let i = 0; i < word.length; i++) {
    let guessedLetter = false;

    for (let j = 0; j < guesses.length; j++) {
      if (guesses[j] === word[i]) {
        displayedWord += guesses[j];
        guessedLetter = true;
        break;
      }
    }

    if (!guessedLetter) {
      displayedWord += "_";
    }

    displayedWord += " ";
  }

  return displayedWord;
}

function getWrongGuesses(word, guesses) {
  let wrongLetters= [];

  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i])) {
      wrongLetters.push(guesses[i]);
    }
  }

  return wrongLetters;
}

function isGameWon(word, guesses) {
  let displayWord = displayWordSoFar(word, guesses);
  displayWord = displayWord.split(" ").join("");
  return word === displayWord;
}

function isGameLost(word, guesses) {
  let wrongGuesses = getWrongGuesses(word, guesses);
  const maxWrongNumbers = 7;
  return wrongGuesses.length >= maxWrongNumbers;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  getWrongGuesses: getWrongGuesses,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};