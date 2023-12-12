import type { Meta, StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  tags: ['autodocs'],
};

export const Default: StoryObj<IconComponent> = {
  args: {
    iconName: 'coffee',
  },
};

export default meta;
