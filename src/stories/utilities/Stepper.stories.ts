import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Stepper from '@components/utilities/Stepper';

const meta = {
  title: 'Utilities/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    value: {
      control: 'number',
      description: 'Stepper 값',
    },
    onClickMinus: {
      description: '마이너스 IconButton 클릭 이벤트',
    },
    onClickPlus: {
      description: '플러스 IconButton 클릭 이벤트',
    },
  },
  args: { onClickMinus: fn(), onClickPlus: fn() },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
  },
};
