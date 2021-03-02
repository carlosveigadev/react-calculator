import operate from './operate';

const calculate = (values, buttonName) => {
  let { total, next, operation } = values;
  const numbers = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (numbers.includes(buttonName)) {
    next = next === null ? buttonName : next.concat(buttonName);
  } else {
    switch (buttonName) {
      case '+/-':
        total = operate(total, '-1', 'x');
        next = operate(next, '-1', 'x');
        break;
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;
      case '=':
        if (operation === '÷' && next === '0') {
          total = 'Error, You could destroy the world if divide by 0.';
        } else if (total !== null && operation !== null) {
          total = operate(total, next, operation);
        } else {
          total = next;
        }
        next = null;
        operation = null;
        break;

      default:
        if (operation === '÷' && next === '0') {
          total = 'Error, You could destroy the world if you divide by 0.';
          operation = null;
          next = null;
        } else if ((operation === null || operation === '÷' || operation === 'x') && buttonName === '-' && next === null) {
          next = buttonName;
        } else {
          if (operation !== null && total !== null) {
            total = operate(next, total, operation);
          } else if (next !== null) {
            operation = buttonName;
            total = next;
          } else {
            operation = buttonName;
          }
          next = null;
        }
        break;
    }
  }
  return { total, next, operation };
};

export default calculate;
