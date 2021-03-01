import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const nums = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (nums.includes(buttonName)) {
    next = next === null ? buttonName : next.concat(buttonName);
  } else if (buttonName === '+/-') {
    total = operate(total, '-1', 'X');
    next = operate(next, '-1', 'X');
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '=') {
    if (total !== null && operation !== null) {
      total = next;
    } else {
      total = operate(total, next, operation);
    }
  } else if (operation) {
    total = operate(total, next, operation);
  } else if (next === null) {
    total = next;
  } else {
    operation = buttonName;
    next = null;
  }
  return { total, next, operation };
};

export default calculate;
