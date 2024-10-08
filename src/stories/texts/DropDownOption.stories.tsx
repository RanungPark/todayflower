import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DropDownOption from '@components/texts/DropDownOption';

const meta: Meta<typeof DropDownOption> = {
  title: 'Texts/DropDownOption',
  component: DropDownOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'DropDownOption 텍스트',
    },
    onClick: {
      description: 'DropDownOption 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Option A',
  },
};
