const expect = require('chai').expect;
const addOne = require('./add-one');
const sumChars = require('./sum-chars');
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

describe('sumChars', () => {
    it('should sum chars', () => {
        expect(sumChars('1', '1')).to.equal('2');
        expect(sumChars('1', '9')).to.equal('10');
        expect(sumChars('2', '6')).to.equal('8');
        expect(sumChars('4', '3')).to.equal('7');
        expect(sumChars('4', '6')).to.equal('10');
        expect(sumChars('8', '4')).to.equal('12');
        expect(sumChars('9', '9')).to.equal('18');
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
