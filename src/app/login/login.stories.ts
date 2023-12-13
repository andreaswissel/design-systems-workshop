import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { MockLoginService } from './mocks/mock-login.service';
import { userEvent, within, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LoginComponent> = {
  title: 'Components/Login',
  component: LoginComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: LoginService,
          useClass: MockLoginService,
        },
      ],
    }),
  ],
};

export const Default = {
  args: {},
};

export const AutomattedLogin: StoryObj<LoginComponent> = {
  args: {},

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.getByLabelText('Email');
    const passwordInput = await canvas.getByLabelText('Password');
    await userEvent.click(emailInput);
    await userEvent.type(emailInput, `user {tab}`, { delay: 50 });
    await expect(passwordInput).toHaveFocus();
    await userEvent.type(passwordInput, `user`, { delay: 50 });

    await userEvent.click(await canvas.getByRole('button'));

    await expect(canvas.getByText('LOGIN: OK')).toBeInTheDocument();
  },
};

export default meta;
