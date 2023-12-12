import { Meta, moduleMetadata } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { MockLoginService } from './mocks/mock-login.service';

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

export default meta;
