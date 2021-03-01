import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = new Big(numberOne);
  const secondNum = new Big(numberTwo);

  if (operation === '-') {
    return firstNum - secondNum;
  } if (operation === '+') {
    return firstNum + secondNum;
  } if (operation === '*') {
    return firstNum * secondNum;
  } if (operation === '÷') {
    return firstNum / secondNum;
  } if (operation === '%') {
    return (firstNum / 100) * secondNum;
  }
  return 'Error';
};

export default operate;
