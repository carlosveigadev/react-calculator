import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import styles from '../styles/style.module.css';

const App = () => {
  const [values, setValues] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setValues(calculate(values, buttonName));
  };

  const { total, next, operation } = values;

  let showResult;
  if (next !== null) {
    showResult = next;
  } else if (operation !== null) {
    showResult = operation;
  } else if (total !== null) { showResult = total; } else {
    showResult = '0';
  }

  return (
    <div className={styles.app}>
      <Display result={showResult} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
