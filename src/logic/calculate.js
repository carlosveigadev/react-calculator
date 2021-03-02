import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const numbers = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (numbers.includes(buttonName)) {
    next = next === null ? buttonName : next.concat(buttonName);
  } else {
    switch (buttonName) {
      case '+/-':
        total = operate(total, '-1', 'X');
        next = operate(next, '-1', 'X');
        break;
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;
      case '=':
        // check operation is divisian and next is 0 show error
        if (total !== null && operation !== null) {
          total = operate(total, next, operation);
        } else {
          total = next;
        }
        next = null;
        operation = null;
        break;

      default:
        // check operation is divisian and next is 0 show error
        // - check if operation is nill and if next is nill -1
        // - check if operation is nill (* or /) and if next is nill -1
        if (operation !== null && total !== null) {
          total = operate(next, total, operation);
        } else if (next !== null) {
          operation = buttonName;
          total = next;
        } else {
          operation = buttonName;
        }
        next = null;
        break;
    }
  }
  return { total, next, operation };
};

//   } else if (next !== null) {
//     total = next;
//   } else if (operation !== null) {
//     total = operate(total, next, operation);
//   } else {
//     operation = buttonName;
//     next = null;
//   }
//   return { total, next, operation };
// };

export default calculate;
