import { LoginComponent } from './login.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { LoginModule } from './login.module';
import { LoginService } from './login.service';
import { MockLoginService } from './mocks/mock-login.service';

const Template: Story<LoginComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginModule],
      providers: [
        {
          provide: LoginService,
          useClass: MockLoginService,
        },
      ],
    }),
  ],
};

export const DefaultLogin = Template.bind({});

DefaultLogin.args = {};
