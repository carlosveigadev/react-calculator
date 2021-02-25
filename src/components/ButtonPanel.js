import React from 'react-dom';

import Button from './Button';

class ButtonPanel extends React.components {
  render() {
    return (
      <div>
        <div>
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" />
        </div>
        <div>
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" />
        </div>
      </div>

    );
  }
}

export default ButtonPanel;
