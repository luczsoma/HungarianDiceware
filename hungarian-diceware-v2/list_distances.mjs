import { readFileSync, writeFileSync } from "node:fs";
import { distance } from "./damerau_levenshtein.mjs";

const filename = "mnsz_filtered_words_only.json";

const words = readFileSync(filename, { encoding: "utf-8" })
  .split("\n")
  .map((row) => row.trim())
  .filter(
    (row) => row !== "" && row !== "[" && row !== "]" && !row.startsWith("// ")
  )
  .map((row) => row.replace(/("|,)/g, ""));

for (
  let min_required_distance = 1;
  min_required_distance <= 4;
  min_required_distance++
) {
  const map = new Map();

  let j = 0;

  for (const word of words) {
    if (!map.has(word)) {
      map.set(word, []);
    }

    for (const w of words) {
      if (word === w) {
        continue;
      }
      const d = distance(word, w);
      if (d <= min_required_distance) {
        map.set(word, [...map.get(word), w]);
      }
    }

    j++;
    if (j % 100 === 0) {
      console.log(`${min_required_distance}: ${j}`);
    }
  }

  const wordPairs = Array.from(map).map(
    ([key, value]) => `${key} (${value.length}) => ${value.join(", ")}`
  );

  writeFileSync(
    `wordPairs_distance${min_required_distance}.txt`,
    wordPairs.join("\n"),
    {
      encoding: "utf-8",
    }
  );
}
