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

    for (let step = 0; step < amount; step++) {
        Currpointing = (Currpointing + (direction === "L" ? -1 : 1) + 100) % 100;
        if (Currpointing === 0) password++;
    }

  i++;
}

console.log(password);