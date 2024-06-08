[![LinkedIn][linkedin-shield]][linkedin-url]

# Vowel Counter Script

This project contains a Node.js script that reads a text file synchronously and counts the number of vowels in it. The project includes a sample text file for testing purposes.

## Files

- `syncRead1.js`: The Node.js script that reads a file and counts the vowels.
- `syncRead2.js`: The Node.js script that reads a file and counts the vowels using a separate function.
- `asyncRead.js`: The Node.js script that reads a file and counts the vowels using the asynchronous file API.
- `sample.txt`: A sample text file containing a paragraph for testing the script.

## Requirements

- Node.js installed on your system.

## Usage

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hossain101199/Vowel_Counting.git
   cd Vowel_Counting
   ```

2. **Run the script `syncRead1.js`**:

   ```bash
   node syncRead1.js sample.txt
   ```

   This command will execute the script and count the number of vowels in sample.txt.

3. **Run the script `syncRead2.js`**:

   ```bash
   node syncRead2.js sample.txt
   ```

   This command will execute the script and count the number of vowels in sample.txt using the vowelCount function.

4. **Run the script `asyncRead.js`**:

   ```bash
   node asyncRead.js sample.txt
   ```

   This command will execute the script and count the number of vowels in sample.txt using the asynchronous file API.

## Script Details

### syncRead1.js

- The script reads the content of a file provided as a command-line argument.
- It converts the content to lowercase and iterates through each character.
- It counts the characters that are vowels (`a`, `e`, `i`, `o`, `u`).
- Finally, it prints the number of vowels in the file.

### syncRead2.js

- The script reads the content of a file provided as a command-line argument.
- It defines a function called `vowelCount` that takes a string and counts the vowels.
- It calls the `vowelCount` function after reading the file content.
- Finally, it prints the number of vowels in the file.

### asyncRead.js

- The script reads the content of a file provided as a command-line argument using the asynchronous file API.
- It defines a function expression called `vowelCount` using arrow function syntax that takes a string and counts the vowels.
- It uses `fs.readFile` to read the file content asynchronously and passes the `vowelCount` function as a callback.
- The callback function handles any errors during file reading and prints the number of vowels in the file.

## Error Handling

- If the filename is not provided, the script will print "Missing arguments".
- If there is an error reading the file (e.g., the file does not exist), the script will print an error message.

## Contributing

- If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## Contact

If you have any questions or feedback, feel free to contact me:

- Mohammad Hossain - [Linkedin](https://www.linkedin.com/in/hossain1011/) - fshossain10@gmail.com

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hossain1011/
