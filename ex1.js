let randomNbr = Math.floor(Math.random() * 10);

let guess = document.querySelector(".guess");
let guessSubmit = document.querySelector(".guessSubmit");
let resultat = document.querySelector(".resultat");
let level=document.querySelector(".level");
function setlevel(){
    let degre = Number(document.querySelector(".level").value);
    return degre;
}

let guessCount = 1;
let resetButton;
function checkGuess() {
  let userguess = Number(guess.value);
  if (userguess === randomNbr) {
    alert("you won !!!!!");
    resultat.textContent = "bravo vous avez trouvé le nombre";
    setGameOver();
  } else if (guessCount === setlevel()) {
    alert("you lost !!!!");
    resultat.textContent = "sorry you lost hihihi";
    setGameOver();
  } else {
    resultat.textContent += "wrong try again";
  }
  guessCount++;
  guess.value = "";
  guess.focus();
}
function setGameOver() {
  guess.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  resultat.textContent = "";
  resetButton.parentNode.removeChild(resetButton);
  guess.disabled = false;
  guessSubmit.disabled = false;
  guess.value = "";
  level.value="";
  level.focus();
}
