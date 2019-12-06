import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('All text is rendered properly', () => {
  const container = render(<App/>);

  container.getByText(/women/i);
  container.getByText(/world/i);
  container.getByText(/cup/i);
  container.getByText(/players/i);
})