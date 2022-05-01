import { InputComponent } from './input.component';
import { Story } from '@storybook/angular';

const Template: Story<InputComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/Input',
  component: InputComponent,
};

export const DefaultInput = Template.bind({});

DefaultInput.args = {};
DefaultInput.argTypes = {
  placeholder: { control: 'text' },
  value: { control: 'text' },
};
