import { ButtonComponent } from './button.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from './button.module';

const Template: Story<ButtonComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
};

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  label: 'Button Label',
  type: 'primary',
  icon: undefined,
};

export const IconButton = Template.bind({});

IconButton.args = {
  label: 'Icon Button',
  type: 'primary',
  icon: 'star',
};
