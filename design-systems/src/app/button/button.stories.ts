import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
};

export const Default: StoryObj<ButtonComponent> = {
  args: {},
};

export default meta;
