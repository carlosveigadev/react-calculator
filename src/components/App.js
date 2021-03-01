import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/operate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      total: null,
      next: null,
      // operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;

    let showResult;
    if (!total) {
      showResult = total;
    } else if (!next) { showResult = next; } else {
      showResult = '0';
    }

    return (
      <>
        <Display result={showResult} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
