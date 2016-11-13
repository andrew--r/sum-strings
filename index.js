const addByChar = require('./add-by-char');
const sumChars = require('./sum-chars');

function sumStrings(string1, string2) {
    let longestString;
    let smallestString;

    if (string1.length > string2.length) {
        longestString = string1;
        smallestString = string2;
    } else {
        longestString = string2;
        smallestString = string1;
    }

    const reversedSmallestString = smallestString.split('').reverse().join('');

    return addByChar(longestString, (char, index) => {
        let result = char;

        if (reversedSmallestString[index]) {
            result = sumChars(char, reversedSmallestString[index]);
        }

        return result;
    });
}

module.exports = sumStrings;
