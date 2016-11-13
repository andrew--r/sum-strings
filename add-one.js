const nextNumber = {
    '0': '1',
    '1': '2',
    '2': '3',
    '3': '4',
    '4': '5',
    '5': '6',
    '6': '7',
    '7': '8',
    '8': '9',
    '9': '0'
};

module.exports = function addOne(string) {
	const stringAsArray = string.split('').reverse();
	const lastIndex = string.length - 1;

	stringAsArray.some((char, index) => {
		const addOneResult = nextNumber[char];
		stringAsArray[index] = addOneResult;

		const incrementNextPosition = addOneResult === '0';

		if (incrementNextPosition && index === lastIndex) {
			stringAsArray.push('1');
			return true;
		}

		return !incrementNextPosition;
	});

	return stringAsArray.reverse().join('');
};
