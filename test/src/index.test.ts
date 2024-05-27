import {sum} from "../../src";

describe('Test sum', () => {
  it('Should add 1+2 and return 3', () => {
    expect(sum(1, 2)).toBe(3);
  })
});