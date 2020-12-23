import { Story, Meta } from '@storybook/angular';
import { CardComponent } from '../projects/card/src/lib/card.component';

export default {
  title: 'Example/Card',
  component: CardComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export const Primary = Template.bind({});

