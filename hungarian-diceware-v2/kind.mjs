import { readFileSync, writeFileSync } from "node:fs";

const filename = "mnsz_20000.json";
const mnsz20000 = JSON.parse(readFileSync(filename, { encoding: "utf-8" }));
const k = JSON.parse(readFileSync("diceware_mnsz.json", { encoding: "utf-8" }));

writeFileSync(filename, JSON.stringify(mnsz20000, undefined, 2), {
  encoding: "utf-8",
});
