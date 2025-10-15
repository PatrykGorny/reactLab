const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "..", "src", "module-data.js");

if (fs.existsSync(outputPath)) {
  console.log("Plik module-data.js już istnieje. Pomijam generowanie.");
  process.exit(0);
}

const count = Number(process.argv[2]) || 10;
let names = [];
let usedEmails = {};
fs.readFile(path.join(__dirname, "names.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  names = data
    .split(/\s+/)
    .map((s) => s.trim())
    .filter((n) => n.length != 0);
  console.log("Dostępne imiona:", names);

  let content = "export const people = [\n";

  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];

    const nameLower = name.toLowerCase();
    if (!usedEmails[nameLower]) {
      usedEmails[nameLower] = 1;
    } else {
      usedEmails[nameLower]++;
    }
    const emailSuffix = usedEmails[nameLower] > 1 ? usedEmails[nameLower] : "";
    const email = `${nameLower}${emailSuffix}@wsei.edu.pl`;

    const year = 1980 + Math.floor(Math.random() * 26);
    const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, "0");
    const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, "0");
    const birthDate = `${year}-${month}-${day}`;

    const phone = `${200 + Math.floor(Math.random() * 799)}-${
      100 + Math.floor(Math.random() * 899)
    }-${100 + Math.floor(Math.random() * 899)}`;

    content += `{\n`;
    content += `    id: ${i + 1},\n`;
    content += `    name: "${name}",\n`;
    content += `    birthDate: "${birthDate}",\n`;
    content += `    email: "${email}",\n`;
    content += `    phone: "${phone}"\n`;
    content += `}${i < count - 1 ? "," : ""}\n`;
  }
  content += "];";
  fs.writeFile("module-data.js", content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("module-data.js generated");
  });
});
