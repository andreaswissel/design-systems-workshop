import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FormLayoutComponent } from './form-layout.component';
import { FormElementComponent } from '../form-element/form-element.component';
import { InputType } from '../input/input.component';

type ExternalProps = {
  FirstInputLabel: string;
  FirstInputType: InputType;
  SecondInputLabel: string;
  SecondInputType: InputType;
};

type FormLayoutWithAux = FormLayoutComponent & ExternalProps;

const meta: Meta<FormLayoutWithAux> = {
  title: 'Components/FormLayout',
  component: FormLayoutComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormLayoutComponent, FormElementComponent],
    }),
  ],
  render: (args: FormLayoutWithAux) => ({
    props: { ...args },
    template: `
    <app-form-layout [columns]="${args.columns}" heading="${args.heading}">
        <app-form-element label="${args.FirstInputLabel}" inputType="${args.FirstInputType}"></app-form-element>
        <app-form-element label="${args.SecondInputLabel}" inputType="${args.SecondInputType}"></app-form-element>
      </app-form-layout>
    `,
  }),
};

export const Default: StoryObj<FormLayoutWithAux> = {
  args: {
    FirstInputLabel: 'Username',
    FirstInputType: InputType.text,
    SecondInputLabel: 'Password',
    SecondInputType: InputType.password,
    columns: 2,
    heading: 'Login Form',
  },
};

export default meta;
