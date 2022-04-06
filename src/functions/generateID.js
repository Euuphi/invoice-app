/**
 * Generate random string of 2 letters and 2 numbers
 *
 * @return {string} - String of 2 random letters and 2 random numbers eg. RT3080
 */
export default function generateID() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const randomLetters = getRandomChars(alphabets, 2);
    const randomNumbers = getRandomChars(numbers, 4);

    return randomLetters + randomNumbers;
}

/**
 * Generates string of random chars choosen from string of chars
 *
 * @param {string} chars - String of chars to choose from eg. "ABCD"
 * @param {number} length - Length of string to return eg. 3
 */
const getRandomChars = (chars, length = 1) => {
    return Array(length)
        .fill()
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
};
