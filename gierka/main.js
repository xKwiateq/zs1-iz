const checkButton = document.getElementById("check");
const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

const numberToGuess = Math.floor(Math.random() * 100 + 1);
let attempts = 0;

function checkNumber() {
  const number = parseInt(numberInput.value);
  attempts++;
  if (number === numberToGuess) {
    output.innerHTML += `<br><b>Udało ci się zgadnąć <br> za ${attempts} razem.</b>`;
    return;
  } else if (number > numberToGuess) {
    output.innerHTML += "Podana liczba jest za duża.<br>";
  } else {
    output.innerHTML += "Podana liczba jest za mała.<br>";
  }
  numberInput.value = "";
}

checkButton.addEventListener("click", checkNumber);
