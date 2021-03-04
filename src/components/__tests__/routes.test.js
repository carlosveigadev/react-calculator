import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Calculator from '../App';
import Quote from '../Quote';
import Error from '../Error';

describe('Check if routes work ', () => {
  it('renders Home page correctly in the proper route.', () => {
    const home = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,

      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });

  it('renders Quote page correctly in the proper route.', () => {
    const quote = renderer
      .create(
        <BrowserRouter>
          <Quote />
        </BrowserRouter>,

      )
      .toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('renders App page correctly in the proper route.', () => {
    const app = renderer
      .create(
        <BrowserRouter>
          <Calculator />
        </BrowserRouter>,

      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });

  it('renders error page correctly in the proper route.', () => {
    const error = renderer
      .create(
        <BrowserRouter>
          <Error />
        </BrowserRouter>,

      )
      .toJSON();
    expect(error).toMatchSnapshot();
  });
});
