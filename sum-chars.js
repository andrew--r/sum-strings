const addOne = require('./add-one');

const sumTable = {
    '0': (char) => char,
    '1': (char) => addOne(sumTable['0'](char)),
    '2': (char) => addOne(sumTable['1'](char)),
    '3': (char) => addOne(sumTable['2'](char)),
    '4': (char) => addOne(sumTable['3'](char)),
    '5': (char) => addOne(sumTable['4'](char)),
    '6': (char) => addOne(sumTable['5'](char)),
    '7': (char) => addOne(sumTable['6'](char)),
    '8': (char) => addOne(sumTable['7'](char)),
    '9': (char) => addOne(sumTable['8'](char)),
};

function sumChars(char1, char2) {
    return sumTable[char1](char2);
}

module.exports = sumChars;