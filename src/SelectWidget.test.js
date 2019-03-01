import React from 'react';
import ReactDOM from 'react-dom';
import SelectWidget from './SelectWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
