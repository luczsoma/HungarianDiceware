import { readFileSync, writeFileSync } from "node:fs";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

const filename = "mnsz_20000.json";
const mnsz20000 = JSON.parse(readFileSync(filename, { encoding: "utf-8" }));

let i = 0;

while (i < mnsz20000.length) {
  const word = mnsz20000[i];
  if (word.exclude === undefined) {
    break;
  }
  i++;
}

console.log(`${i} words processed…`);

const readline = createInterface(stdin, stdout);

while (i < mnsz20000.length) {
  const word = mnsz20000[i];

  const answer = await readline.question(
    `${word.word} exclude? ([y]es / [n]o / [b]ack / [s]top): `
  );
  if (answer === "s") {
    break;
  }
  switch (answer) {
    case "y":
      word.exclude = true;
      i++;
      break;
    case "n":
      word.exclude = false;
      i++;
      break;
    case "b":
      i = Math.max(i - 1, 0);
      break;
  }
}

readline.close();

writeFileSync(filename, JSON.stringify(mnsz20000, undefined, 2), {
  encoding: "utf-8",
});
