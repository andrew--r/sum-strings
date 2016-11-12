[![Build Status](https://travis-ci.org/andrew--r/sum-strings.svg?branch=master)](https://travis-ci.org/andrew--r/sum-strings)

# sum-strings

Sum strings like integers without using integers. Yep, that's a bit crazy.

```javascript
const sumStrings = require('sum-strings');

sumStrings('3', '14'); // -> 17
sumStrings('12999', '1'); // -> 13000
sumStrings('3000', '5000'); // -> 8000
```
