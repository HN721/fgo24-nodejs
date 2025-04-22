const url =
  "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json";
const fs = require("fs/promises");
const path = require("path");

async function createFile(fileName) {
  try {
    const content = "Album ke-4 YasirMaxStyle";
    await fs.writeFile(fileName, content);
    console.log(" file success");
  } catch (err) {
    console.log(err);
  }
}
const fetchSong = async () => {
  try {
    const result = await fetch(url);
    const res = await result.json();
    let arr = [];
    res.forEach((item) => {
      const result = item.split(" - ").reverse().join(" - ");
      arr.push(result);
    });
    arr.forEach((songs) => {
      createFile(path.join("music", `${songs}.mp3`));
    });
    console.log(arr);
  } catch (err) {
    console.log(err);
  }
};
fetchSong();
