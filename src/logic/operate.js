import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = new Big(numberOne);
  const secondNum = new Big(numberTwo);

  if (operation === '-') {
    return firstNum.minus(secondNum).toString();
  } if (operation === '+') {
    return firstNum.plus(secondNum).toString();
  } if (operation === 'x') {
    return firstNum.times(secondNum).toString();
  } if (operation === '÷') {
    return firstNum.div(secondNum).toString();
  } if (operation === '%') {
    return (firstNum.div(100)).times(secondNum).toString();
  }
  return 'Error';
};

export default operate;
