import operation from './operate';

const calculate = (data, buttonName) => {
  let { total, next } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
  } else if (buttonName === '=') {
    total = operation(total, next);
  }
  return { total, next };
};

export default calculate;
