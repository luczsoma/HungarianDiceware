import { readFileSync, writeFileSync } from "node:fs";

const filename = "mnsz_filtered_words_only.json";
const words = readFileSync(filename, { encoding: "utf-8" });

const removed_words = words
  .split("\n")
  .map((row) => row.trim())
  .filter(
    (row) => row !== "" && row !== "[" && row !== "]" && row.startsWith("// ")
  )
  .map((row) => row.replace(/(\/\/ |"|,)/g, ""));

writeFileSync(
  "removed_words.json",
  JSON.stringify(removed_words, undefined, 2),
  {
    encoding: "utf-8",
  }
);
