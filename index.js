const assert = {
  type(val, type) {
    if (typeof val !== type) {
      throw new TypeError(`Expected '${val}' to be a '${type}', got '${typeof val}'`);
    }
  },
};

export default (str) => {
  assert.type(str, 'string');

  const emptyCharacters = [
    '\n',
    ' ',
  ];

  return str.split('').every(ch => emptyCharacters.indexOf(ch) !== -1);
}

