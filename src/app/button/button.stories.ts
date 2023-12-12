import { type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export const Default: StoryObj<ButtonComponent> = {
  args: {},
};

export const WithIcon: StoryObj<ButtonComponent> = {
  args: {
    label: 'Want to buy me a coffee?',
    icon: 'coffee',
  },
};

export default meta;
