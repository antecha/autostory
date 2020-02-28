// @flow
import React from 'react';
import type { Element } from 'react';

type InputProps = { type: 'text' | 'number', name: string, value: string | number };

const Input = ({ type = 'text', name = '', value }: InputProps): Element<'input'> => (
  <input name={name} type={type} value={value} />
);

export default Input;
