import { Meta, StoryObj } from '@storybook/angular';
import { FormElementComponent } from './form-element.component';
import * as InputStories from '../input/input.stories';

const meta: Meta<FormElementComponent> = {
  title: 'Components/FormElement',
  component: FormElementComponent,
  tags: ['autodocs'],
};

export const Default: StoryObj<FormElementComponent> = {
  args: {
    ...InputStories.Default.args,
    label: 'Form Element Label',
    input: undefined,
  },
};

export default meta;
