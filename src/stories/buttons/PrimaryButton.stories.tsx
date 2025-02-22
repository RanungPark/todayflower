import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import PrimaryButton from '@components/buttons/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '175px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'PrimaryButton 텍스트',
      defaultValue: 'Button',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      description: 'PrimaryButton 테마',
      defaultValue: 'Button',
    },
    hasLeftIcon: {
      control: 'boolean',
      description: '왼쪽 IconButton 유무',
      defaultValue: false,
    },
    hasRightIcon: {
      control: 'boolean',
      description: '오른쪽 IconButton 유무',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'PrimaryButton 활성화 여부',
      defaultValue: false,
    },
    onClick: {
      description: 'PrimaryButton 클릭 이벤트',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'button',
  },
};

export const PrimaryIsDisabled: Story = {
  args: {
    variant: 'primary',
    children: 'button',
    disabled: true,
  },
};

export const SecondaryIsDisabled: Story = {
  args: {
    variant: 'secondary',
    children: 'button',
    disabled: true,
  },
};

export const TertiaryIsDisabled: Story = {
  args: {
    variant: 'tertiary',
    children: 'button',
    disabled: true,
  },
};

export const PrimaryWithHasRightIcon: Story = {
  args: {
    variant: 'primary',
    children: 'button',
    hasRightIcon: true,
  },
};

export const PrimaryWithHasLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'button',
    hasLeftIcon: true,
  },
};

export const PrimaryWithHasAllIcon: Story = {
  args: {
    variant: 'primary',
    children: 'button',
    hasRightIcon: true,
    hasLeftIcon: true,
  },
};

export const PrimaryWithCustomButton: Story = {
  args: {
    variant: 'primary',
    children: 'button',
    hasLeftIcon: true,
    CustomButton: Check,
    'aria-label': 'check',
  },
};
