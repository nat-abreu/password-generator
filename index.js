const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passEl1 = document.getElementById("password-el1");
const passEl2 = document.getElementById("password-el2");

const pass10 = document.getElementById("pass-10");
const pass12 = document.getElementById("pass-12");
const pass15 = document.getElementById("pass-15");

const passLetters = document.getElementById("pass-letters");
const passNumbers = document.getElementById("pass-numbers");
const passSymbols = document.getElementById("pass-symbols");

function randomPassword() {
  let passwordLength = 0;
  if (pass10.checked) {
    passwordLength = 10;
  } else if (pass12.checked) {
    passwordLength = 12;
  } else {
    passwordLength = 15;
  }

  let characters = [];
  if (passLetters.checked) {
    characters.push(...letters);
  }
  if (passNumbers.checked) {
    characters.push(...numbers);
  }
  if (passSymbols.checked) {
    characters.push(...symbols);
  }

  if (characters.length === 0) {
    return "";
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generatePass() {
  passEl1.textContent = randomPassword();
  passEl2.textContent = randomPassword();
}
