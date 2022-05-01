import { IconComponent } from './icon.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from './icon.module';

const Template: Story<IconComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [IconModule],
    }),
  ],
};

export const DefaultIcon = Template.bind({});

DefaultIcon.args = {};
