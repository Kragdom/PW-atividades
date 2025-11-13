import fs from "fs";

const inputFile = "restaurantes.json";
const outputFile = "restaurantes_array.json";

const lines = fs
  .readFileSync(inputFile, "utf8")
  .split("\n")
  .filter(line => line.trim() !== "");

const data = lines.map(line => JSON.parse(line));

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), "utf8");

console.log(`✅ Arquivo convertido com sucesso: ${outputFile}`);
