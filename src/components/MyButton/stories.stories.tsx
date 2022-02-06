/* eslint-disable */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton from './';

export default {
  title: 'ICTS/MyButton',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} />
);

export const Red = Template.bind({});
Red.args = {
  color: '#ff0000',
};

export const Blue = Template.bind({});
Blue.args = {
  color: '#0000ff',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
