import { AmountDatePipe } from './amount-date.pipe';

describe('AmountDatePipe', () => {
  it('create an instance', () => {
    const pipe = new AmountDatePipe();
    expect(pipe).toBeTruthy();
  });
});
