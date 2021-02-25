import React from 'react-dom';
import Button from './Button';

const ButtonPanel = () => {
  const itemNames = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  return (
    itemNames.map((row, i) => (
      <div key={`row ${i + 1}`}>
        {row.map(e => (
          <Button name={e} key={e} />
        ))}
      </div>
    ))
  );
};

export default ButtonPanel;
