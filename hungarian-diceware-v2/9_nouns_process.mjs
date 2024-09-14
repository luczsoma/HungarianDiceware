import { readFileSync, writeFileSync } from "node:fs";

const allowed_characters_regex = /^[aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz]+$/;

const original = JSON.parse(
  readFileSync("0_mnsz_original.json", { encoding: "utf-8" })
).filter((row) => row[1] === "N");
const original_words_only = original.map((row) => row[0]);
const trimmed = original_words_only.map((word) => word.trim());
const deduplicated = Array.from(new Set(trimmed));
const filtered = deduplicated.filter((word) =>
  allowed_characters_regex.test(word)
);

writeFileSync("9_nouns_result.json", JSON.stringify(filtered, undefined, 2), {
  encoding: "utf-8",
});
