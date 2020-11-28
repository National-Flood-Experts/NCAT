import ncat from '../src/ncat';

describe('Test', () => {
  it('add two numbers together', () => {
    expect(ncat.add(1, 2)).toBe(3);
  });
});
