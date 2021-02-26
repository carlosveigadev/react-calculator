const calculate = (data, buttonName) => {
  let { total, next } = data;
  const { operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
  } else if (buttonName === '=') {
    total = operation(total, next, buttonName);
  }
  return { total, next, operation };
};

export default calculate;
