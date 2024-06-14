import { readFileSync } from "node:fs";

const words = JSON.parse(
  readFileSync("1_initial_filter_words_result.json", { encoding: "utf-8" })
);
const result = [];

for (const small of words) {
  const bigger = words.filter((big) => big !== small && big.includes(small));
  if (bigger.length > 0) {
    console.log(`${small} => ${bigger.join(", ")}`);
  }
}

// writeFileSync(
//   "2_filter_substrings_result.json",
//   JSON.stringify(result, undefined, 2),
//   {
//     encoding: "utf-8",
//   }
// );
