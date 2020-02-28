import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Input from './index';

export default {
  component: Input,
  title: 'Input',
  decorators: [withKnobs],
};

export const InputText = () => <Input name={text('Name', 'username')} value={text('value', 'hey')} />;
