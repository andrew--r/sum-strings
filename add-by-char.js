const nextNumber = require('./next-number');

function addByChar(string, addingFn) {
    if (!string) return '';

    const array = [...string].reverse();
    const charsCount = array.length;
    let result;

    let delayedAdd = 0;

    result = array.reduce((acc, char, index) => {
        let currentChar = char;

        if (delayedAdd) {
            currentChar = nextNumber[currentChar];

            if (currentChar.length > 1) {
                currentChar = currentChar.slice(-1);
            } else {
                delayedAdd--;
            }
        }

        const addResult = addingFn(currentChar, index);

        if (addResult.length > 1) {
            acc += addResult.slice(-1);
            delayedAdd++;
        } else {
            acc += addResult;
        }

        return acc;
    }, '');

    if (delayedAdd) {
        result += '1';
    }

    return result.split('').reverse().join('');
}

module.exports = addByChar;
