const fs = require("fs");
const { existsSync } = fs;

if (!existsSync("./module-data.js")) {
  const count = Number(process.argv[2]);
  fs.readFile("./src/data/names.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    names = data
      .split("\n")
      .map((s) => s.trim())
      .filter((n) => n.length != 0);
    console.log(names);
    let content = "export const people = [";
    for (let i = 0; i < count; i++) {
      let name = names[~~((Math.random() * names.length) / 1)];
      const birthDate = new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      )
        .toISOString()
        .split("T")[0];
      const phone = `${Math.floor(Math.random() * 900 + 100)}-${Math.floor(
        Math.random() * 900 + 100
      )}-${Math.floor(Math.random() * 900 + 100)}`;
      const rate = Math.floor(Math.random() * 11);

      content += `\n{\n\tid: ${
        i + 1
      },\n\tname: "${name}",\n\tbirthDate: "${birthDate}",\n\temail: "${name.toLowerCase()}@wsei.edu.pl",\n\trating: ${rate},\n\tphone: "${phone}"\n},`;
    }
    content += "\n];";
    fs.writeFile("./src/module-data.js", content, (err) => {
      if (err) {
        console.error(err);
      }
      console.log("module-data.js generated");
    });
  });
}
