## is-empty-line [![Build Status](https://travis-ci.org/joegesualdo/is-empty-line-js.svg?branch=master)](https://travis-ci.org/joegesualdo/is-empty-line-js)
> Detect if a line is empty.

## Install
```
$ npm install --save @joegesualdo/is-empty-line
```

## Usage
```javascript
import isEmptyLine from ('@joegesualdo/is-empty-line')

isEmptyLine('\n  ');
// => true

isEmptyLine('  ');
// => true

isEmptyLine('x');
// => false
```

## Test
```
$ npm test
```
## API
### `isEmptyLine(str)`

| Name      | Type     | Required | Default | Description                             |
|-----------|----------|----------|---------|---------------------------------------- |
| str       | `String` |  `yes`   |  `N/A`  | The string you want to test             |

```javascript
import isEmptyLine from ('@joegesualdo/is-empty-line')

isEmptyLine('\n  ');
// => true

isEmptyLine('  ');
// => true

isEmptyLine('x');
// => false
```

## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
