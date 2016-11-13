const addOne = require('./add-one');
const subtractOne = require('./subtract-one');


function sumStrings(a, b) {
	while (b !== '0') {
		a = addOne(a);
		b = subtractOne(b);
	}

	return a;
}

module.exports = sumStrings;
