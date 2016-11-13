const expect = require('chai').expect;
const addOne = require('./add-one');
const subtractOne = require('./subtract-one');
const sumStrings = require('./index');

describe('addOne', () => {
	it('should add one', () => {
		expect(addOne('1')).to.equal('2');
		expect(addOne('9')).to.equal('10');
		expect(addOne('12')).to.equal('13');
		expect(addOne('79')).to.equal('80');
		expect(addOne('99')).to.equal('100');
		expect(addOne('255')).to.equal('256');
		expect(addOne('12999')).to.equal('13000');
	});
});

describe('subtractOne', () => {
	it('should subtract one', () => {
		expect(subtractOne('1')).to.equal('0');
		expect(subtractOne('10')).to.equal('9');
		expect(subtractOne('12')).to.equal('11');
		expect(subtractOne('80')).to.equal('79');
		expect(subtractOne('100')).to.equal('99');
		expect(subtractOne('256')).to.equal('255');
		expect(subtractOne('13000')).to.equal('12999');
	});
});

describe('sumStrings', () => {
	it('should sum strings', () => {
		expect(sumStrings('21', '9')).to.equal('30');
		expect(sumStrings('5', '195')).to.equal('200');
		expect(sumStrings('591', '4')).to.equal('595');
		expect(sumStrings('15467', '2399')).to.equal('17866');
	})
});
