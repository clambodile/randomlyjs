## randomly

Make random decisions

## Install

```bash
$ npm install randomly
```

## Usage

```js
const randomly = require('randomly')

randomly('foo', 'bar')
//50% of the time, returns 'foo'; 50% of the time, returns 'bar'

randomly(1, 3, 5, 7, 8)
//equal probability of returning 1, 3, 5, 7, or 8


//works with callbacks
const buggify = function(fn) {
  return function() {
    return randomly(fn(...arguments), (() => new Error('Unexpected Token:😏'))())
  }
}
```