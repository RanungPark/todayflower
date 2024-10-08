import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import RadioButton from '@components/utilities/RadioButton';

const meta = {
  title: 'Utilities/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'RadioButton 텍스트',
    },
    name: {
      control: 'text',
      description: 'RadioButton 키(name)',
    },
    value: {
      control: 'text',
      description: 'RadioButton 값(value)',
    },
    isGrop: {
      control: 'boolean',
      description: 'RadioButton 그룹 여부',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'RadioButton 선택 유무',
    },
    onChange: {
      description: 'RadioButton 체인지 이벤트',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Radio Button',
    isGrop: false,
  },
};
