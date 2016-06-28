import test from 'ava';
import isEmptyLine from './dist';

test('detects if line consists of a single space', t => {
  t.true(isEmptyLine(' '));
});

test('detects if line consists of multiple spaces', t => {
  t.true(isEmptyLine('  '));
});

test('detects if line consists only a new line character ("\\n")', t => {
  t.true(isEmptyLine('\n  '));
});

test('detects if line consists of spaces and new line characters ("\\n")', t => {
  t.true(isEmptyLine('\n  '));
});
