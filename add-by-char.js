const nextNumber = require('./next-number');

function addByChar(string, addingFn) {
    if (!string) return '';

    const array = [...string].reverse();
    const charsCount = array.length;
    let result;

    let delayedIncrement = 0;

    result = array.reduce((acc, char, index) => {
        let currentChar = char;

        if (delayedIncrement) {
            currentChar = nextNumber[currentChar];

            if (currentChar.length > 1) {
                currentChar = currentChar.slice(-1);
            } else {
                delayedIncrement--;
            }
        }

        const addResult = addingFn(currentChar, index);

        if (addResult.length > 1) {
            acc += addResult.slice(-1);
            delayedIncrement++;
        } else {
            acc += addResult;
        }

        return acc;
    }, '');

    if (delayedIncrement) {
        result += '1';
    }

    return result.split('').reverse().join('');
}

module.exports = addByChar;
