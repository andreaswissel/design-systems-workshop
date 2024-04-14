import { InputComponent, InputType } from './input.component';
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
};

export const Default: StoryObj<InputComponent> = {
  args: {
    inputType: InputType.text,
    placeholder: 'This is a placeholder',
    value: '',
    id: 'uuid',
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;
