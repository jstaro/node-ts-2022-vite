import { describe, test, expect } from 'vitest';
import { hello } from './index.js';

describe('index', () => {
  test('can call hello', () => {
    let result = '';
    const helloMock = (...args: unknown[]) => {
      [result] = args as string[];
    };

    hello('monkey', helloMock);
    expect(result).toBe('Hello monkey');
  });
});
