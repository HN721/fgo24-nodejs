const fs = require("fs/promises");
const path = require("path");
async function createSong(fileName) {
  try {
    const content = "Album ke 5 YasirMaxStyle";
    await fs.writeFile(fileName, content);
    console.log(" file success");
  } catch (err) {
    console.log(err);
  }
}
const createFolder = async (folderName) => {
  try {
    await fs.mkdir(folderName, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};
async function createFile(fileName) {
  try {
    const content = "Album ke-5s YasirMaxStyle";
    await fs.writeFile(fileName, content);
    console.log(" file success");
  } catch (err) {
    console.log(err);
  }
}
const main = async () => {
  const listFiles = await fs.readdir("music");

  listFiles.map((item, index) => {
    const [artist, songs] = item.split(" - ");
    console.log(artist, songs);
    createFolder(artist);
    createFile(path.join(artist, `${artist}- ${songs}`));
  });
};
main();
