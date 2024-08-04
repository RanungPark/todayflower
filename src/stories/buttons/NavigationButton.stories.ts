import NavigationButton from '@components/buttons/NavigationButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactComponent as WMenu } from '@assets/icons/wght400/WMenu.svg';

const meta = {
  title: 'Buttons/NavigationButton',
  component: NavigationButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'NavigationButton 텍스트',
      defaultValue: 'Link',
    },
    onClick: {
      description: 'NavigationButton 클릭 이벤트',
    },
    hasIcon: {
      control: 'boolean',
      description: 'IconButton 유무',
      defaultValue: false,
    },
    IconComponent: {
      control: 'text',
      description: 'SVG 컴포넌트',
      defaultValue: WMenu,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
  },
};

export const HasIcon: Story = {
  args: {
    hasIcon: true,
    IconComponent: WMenu,
  },
};
