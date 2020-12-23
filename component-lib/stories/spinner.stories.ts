import { Story, Meta } from '@storybook/angular';
import { SpinnerComponent } from '../projects/spinner/src/lib/spinner.component';

export default {
  title: 'Example/Spinner',
  component: SpinnerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
  component: SpinnerComponent,
  props: args,
});

export const Primary = Template.bind({});
