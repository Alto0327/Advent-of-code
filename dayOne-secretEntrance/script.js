import fs from "fs";

const text = fs.readFileSync("./puzzleInput.txt", "utf8");

const words = text.trim().split(/\s+/);

let i = 0;

let Currpointing = 50;
let password = 0;

while (i < words.length) {
  const word = words[i];
  const direction = word[0];
  const amount = Number(word.slice(1));

  if (direction === "L") {
    Currpointing = (Currpointing - amount + 100) % 100;
  } else {
    Currpointing = (Currpointing + amount) % 100;
  }

  if (Currpointing === 0) {
    password += 1;
  }

  i++;
}

console.log(password);