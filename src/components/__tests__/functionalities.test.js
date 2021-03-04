import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('test the inputs and verifies if the right value is displayed in the calculator', () => {
  const leftClick = { button: 0 };

  it('displays the value of 2 in the calculator using a "+" operation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByTestId('1'), leftClick);
    userEvent.click(screen.getByTestId('+'), leftClick);
    userEvent.click(screen.getByTestId('1'), leftClick);
    userEvent.click(screen.getByTestId('='), leftClick);
    expect(screen.getByTestId('display').textContent).toBe('2');
  });

  it('displays the value of 0 in the calculator using a "-" operation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByTestId('1'), leftClick);
    userEvent.click(screen.getByTestId('-'), leftClick);
    userEvent.click(screen.getByTestId('1'), leftClick);
    userEvent.click(screen.getByTestId('='), leftClick);
    expect(screen.getByTestId('display').textContent).toBe('0');
  });

  it('displays the value of 1 in the calculator using a "÷" operation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByTestId('1'), leftClick);
    userEvent.click(screen.getByTestId('÷'), leftClick);
    userEvent.click(screen.getByTestId('1'), leftClick);
    userEvent.click(screen.getByTestId('='), leftClick);
    expect(screen.getByTestId('display').textContent).toBe('1');
  });

  it('displays the value of 25 in the calculator using a "x" operation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByTestId('5'), leftClick);
    userEvent.click(screen.getByTestId('x'), leftClick);
    userEvent.click(screen.getByTestId('5'), leftClick);
    userEvent.click(screen.getByTestId('='), leftClick);
    expect(screen.getByTestId('display').textContent).toBe('25');
  });

  it('displays an error when you divide by 0', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByTestId('5'), leftClick);
    userEvent.click(screen.getByTestId('÷'), leftClick);
    userEvent.click(screen.getByTestId('0'), leftClick);
    userEvent.click(screen.getByTestId('='), leftClick);
    expect(screen.getByTestId('display').textContent).toContain('Error');
  });
});
