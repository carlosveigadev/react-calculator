import calculate from '../calculate';

describe('test the calculate function that makes the major calculations for the app', () => {
  const values = { total: 5, next: 5, operation: null };

  describe('test major 4 operators', () => {
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

  describe('');
});
