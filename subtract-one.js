const prevNumber = {
	'0': '9',
	'1': '0',
	'2': '1',
	'3': '2',
	'4': '3',
	'5': '4',
	'6': '5',
	'7': '6',
	'8': '7',
	'9': '8',
};

module.exports = function subtractOne(string) {
	const stringAsArray = string.split('').reverse();

	stringAsArray.some((char, index) => {
		const subtractResult = prevNumber[char];
		stringAsArray[index] = subtractResult;

		const decrementNextPosition = subtractResult === '9';
		return !decrementNextPosition;
	});

	let result = stringAsArray.reverse().join('');

	if (result === '0') {
		result = result;
	} else {
		result = result.replace(/^0*/, '');
	}

	return result;
};
