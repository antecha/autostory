import React from 'react';
import { create } from 'react-test-renderer';
import Input from './index';

describe('Input', () => {
  const testRenderer = (name, type) => create(<Input type={type} name={name} />);

  it('renders', () => {
    expect(testRenderer('username', 'text').toJSON()).toMatchSnapshot();
  });
});
