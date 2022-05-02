import { CardComponent } from './card.component';
import { Story } from '@storybook/angular';

const Template: Story<CardComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/Card',
  component: CardComponent,
};

export const DefaultCard = Template.bind({});

DefaultCard.args = {};
