const fs = require("fs/promises");
const path = require("path");
const music = [
  "Dongker - Bertaruh Pada Api",
  "Queen - Bohemian Rhapsody",
  "The Beatles - Dont let me down",
  "Dongker - Tak hingga",
  "Dewa  - Arjuna",
  "Yasir - Ajojing",
  "Noah - Separuh Nafas",
  "Iwan Fals - Denting Paino",
  "Oasis - Dont look back in anger",
  "A7X - Nightmare",
];

async function createFile(fileName) {
  try {
    const content = "Album ke-3 YasirMaxStyle";
    await fs.writeFile(fileName, content);
    console.log("write file success");
  } catch (err) {
    console.log(err);
  }
}
music.forEach((music) => {
  createFile(path.join("music", `${music}.mp3`));
});
