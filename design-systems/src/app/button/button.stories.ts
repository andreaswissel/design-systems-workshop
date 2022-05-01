import {ButtonComponent} from './button.component';
import { Story } from '@storybook/angular';

const Template: Story<ButtonComponent> = (args) => ({
  props: args
});

export default {
  title: 'Components/Button',
  component: ButtonComponent
};

export const DefaultButton = Template.bind({});

DefaultButton.args = {};