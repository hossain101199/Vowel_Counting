const fs = require("fs");

// console.log(process.argv);

if (process.argv.length < 3) {
  console.error("Missing arguments");
}

const fileName = process.argv[2];

let content;

try {
  content = fs.readFileSync(fileName, "utf-8");
} catch (error) {
  console.error("Error reading file:", error);
}

// console.log(content);

function vowelCount(text) {
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of text.toLocaleLowerCase()) {
    //   console.log(char);

    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(`The number of vowels in the file is: ${count}`);
}

vowelCount(content);
