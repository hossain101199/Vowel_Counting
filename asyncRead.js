const fs = require("fs");

// console.log(process.argv);

if (process.argv.length < 3) {
  console.error("Missing arguments");
}

const fileName = process.argv[2];

const vowelCount = (text) => {
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of text.toLocaleLowerCase()) {
    //   console.log(char);

    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(`The number of vowels in the file is: ${count}`);
};

fs.readFile(fileName, "utf-8", (error, content) => {
  if (error) {
    console.error("Error reading file:", error);
  }

  vowelCount(content);
});
