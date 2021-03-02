import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import mainStyles from '../styles/Main.module.css';

const App = () => {
  const [values, setValues] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setValues(calculate(values, buttonName));
  };

  const { total, next } = values;

  let showResult;
  if (next !== null) {
    showResult = next;
  } else if (total !== null) { showResult = total; } else {
    showResult = '0';
  }

  const calculatorSize = [mainStyles.flex, mainStyles.width].join(' ');

  return (
    <div className={calculatorSize}>
      <Display result={showResult} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
