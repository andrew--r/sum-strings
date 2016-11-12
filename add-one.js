const nextNumber = require('./next-number');
const addByChar = require('./add-by-char');

module.exports = function addOne(string) {
    return addByChar(string, (char, index) => index === 0 ? nextNumber[char] : char);
};