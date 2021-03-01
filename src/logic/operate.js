import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  // console.log(numberOne, numberTwo, operation);
  const firstNum = new Big(numberOne.to_int);
  const secondNum = new Big(numberTwo);

  if (operation === '-') {
    return firstNum.minus(secondNum);
  } if (operation === '+') {
    return firstNum.plus(secondNum);
  } if (operation === 'X') {
    return firstNum.times(secondNum);
  } if (operation === '÷') {
    return firstNum.div(secondNum);
  } if (operation === '%') {
    return (firstNum.div(100)).times(secondNum);
  }
  return 'Error';
};

export default operate;
