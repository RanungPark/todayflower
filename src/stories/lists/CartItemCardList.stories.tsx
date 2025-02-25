import type { Meta, StoryObj } from '@storybook/react';

import CartItemCards from '@components/cards/CartItemCards';

const meta: Meta<typeof CartItemCards> = {
  title: 'Lists/CartItemCards',
  component: CartItemCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hasTextButton: {
      control: 'boolean',
      description: 'CartItemCard 텍스트 버튼 유무',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasTextButton: true,
  },
};
