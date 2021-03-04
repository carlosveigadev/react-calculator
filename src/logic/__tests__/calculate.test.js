import calculate from '../calculate';

describe('test the calculate function that makes the major calculations for the app', () => {
  const values = { total: 5, next: 5, operation: null };

  test('Test + operator', () => {
    values.operation = '+';
    const resultObject = calculate(values);
    expect(resultObject.total).toBe('10');
  });

  test('Test - operator', () => {
    values.operation = '-';
    const resultObject = calculate(values);
    expect(resultObject.total).toBe('0');
  });

  test('Test ÷ operator', () => {
    values.operation = '÷';
    const resultObject = calculate(values);
    expect(resultObject.total).toBe('1');
  });

  test('Test x operator', () => {
    values.operation = 'x';
    const resultObject = calculate(values);
    expect(resultObject.total).toBe('25');
  });
});
