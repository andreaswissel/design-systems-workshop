import { FormLayoutComponent } from './form-layout.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { FormLayoutModule } from './form-layout.module';
import { FormElementModule } from '../form-element/form-element.module';

type FormLayoutProps = {
  myControl: string;
};

const Template: Story<FormLayoutComponent & FormLayoutProps> = (args) => ({
  props: { args },
  template: `
  <app-form-layout [columns]="args.columns">
    <app-form-element label="Username"></app-form-element>
    <app-form-element label="Password" type="password"></app-form-element>
  </app-form-layout>
  `,
});

export default {
  title: 'Components/FormLayout',
  component: FormLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [FormLayoutModule, FormElementModule],
    }),
  ],
};

export const DefaultFormLayout = Template.bind({});

DefaultFormLayout.args = {
  myControl: 'Hello there!',
  columns: 2,
};
