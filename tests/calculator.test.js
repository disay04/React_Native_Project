import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../utils/calculator.js';

test('calculates each supported operation, including negative values', () => {
  assert.equal(calculate(2, '+', 3), 5);
  assert.equal(calculate(2, '-', 7), -5);
  assert.equal(calculate(-4, '×', 3), -12);
  assert.equal(calculate(9, '÷', 2), 4.5);
});

test('rounds common floating point artifacts', () => {
  assert.equal(calculate(0.1, '+', 0.2), 0.3);
});

test('rejects division by zero, non-finite inputs, overflow and unknown operators', () => {
  assert.throws(() => calculate(3, '÷', 0), /divide by zero/);
  assert.throws(() => calculate(Infinity, '+', 1), /valid number/);
  assert.throws(() => calculate(NaN, '-', 1), /valid number/);
  assert.throws(() => calculate(Number.MAX_VALUE, '×', 2), /too large/);
  assert.throws(() => calculate(2, '^', 4), /operation/);
});
