import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/Components/App';

describe('<App />', () => {
  it('renders', () => {
    shallow(<App />);
  });
});
