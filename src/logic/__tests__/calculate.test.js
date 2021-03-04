import calculate from '../calculate';

describe('test the calculate function that makes the major calculations for the app', () => {
  describe('test default operations', () => {
    const values = { total: '5', next: '5', operation: null };
    let buttonName = null;
    it('resets the values of next and operation', () => {
      values.next = '0';
      values.operation = '÷';
      const resultObject = calculate(values);
      expect(resultObject.next).toBe(null);
      expect(resultObject.operation).toBe(null);
      expect(resultObject.total).toBe('Error, You could destroy the world if divide by 0.');
    });

    it('makes the value of number to be negative, using -, when operation is null', () => {
      values.next = null;
      values.operation = null;
      buttonName = '-';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.next).toBe(buttonName);
    });

    it('makes the value of number to be negative, using -, when operation is "÷"', () => {
      values.next = null;
      values.operation = '÷';
      buttonName = '-';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.next).toBe(buttonName);
    });

    it('makes the value of number to be negative, using -, when operation is "x"', () => {
      values.next = null;
      values.operation = 'x';
      buttonName = '-';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.next).toBe(buttonName);
    });
  });

  describe('test major 4 operators', () => {
    const values = { total: '5', next: '5', operation: null };
    test('+ operator', () => {
      values.operation = '+';
      const resultObject = calculate(values);
      expect(resultObject.total).toBe('10');
    });

    test('- operator', () => {
      values.operation = '-';
      const resultObject = calculate(values);
      expect(resultObject.total).toBe('0');
    });

    test('÷ operator', () => {
      values.operation = '÷';
      const resultObject = calculate(values);
      expect(resultObject.total).toBe('1');
    });

    test('x operator', () => {
      values.operation = 'x';
      const resultObject = calculate(values);
      expect(resultObject.total).toBe('25');
    });
  });

  describe('other default elements that update the values of the object.', () => {
    const values = { total: null, next: null, operation: '-' };
    it('returns the value of total as the value of next and update next to be equal to null, also updates the value of operation with the buttonName operator', () => {
      values.next = '5';
      const buttonName = '+';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.operation).toBe(buttonName);
      expect(resultObject.total).toBe(values.next);
      expect(resultObject.next).toBe(null);
    });

    it('updates the value of operation to be equal to buttonName when no other values are passed.', () => {
      const buttonName = '+';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.operation).toBe(buttonName);
    });
  });

  describe('Add test for support digits (+/-, AC).', () => {
    const values = { total: null, next: null, operation: null };
    it('Changes the sign of the current digit and assign.', () => {
      values.next = '5';
      const buttonName = '+/-';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.next).toBe('-5');
    });

    it('Changes the value of total to change sign.', () => {
      values.total = '10';
      const buttonName = '+/-';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.total).toBe('-10');
    });

    it('resets the calculator', () => {
      values.total = '10';
      values.operation = '+';
      values.next = '10';
      const buttonName = 'AC';
      const resultObject = calculate(values, buttonName);
      expect(resultObject.total).toBe(null);
      expect(resultObject.operation).toBe(null);
      expect(resultObject.next).toBe(null);
    });
  });
});
