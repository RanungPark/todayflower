import type { Meta, StoryObj } from '@storybook/react';

import DefaultTextField from '@components/textfields/DefaultTextField';

const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '364px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    inputState: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success'],
      },
      description: 'DefaultTextField 상태 테마',
    },
    hasLabel: {
      control: 'boolean',
      description: 'DefaultTextFielLabel 라벨 유무',
    },
    label: {
      control: 'text',
      description: 'DefaultTextFielLabel 라벨 텍스트',
    },
    htmlFor: {
      control: 'text',
      description: 'DefaultTextFielLabel htmlFor(input의 id값) 텍스트',
    },
    hasHelpMessage: {
      control: 'boolean',
      description: 'DefaultTextField HelpMessage 유무',
    },
    helpMessage: {
      control: 'text',
      description: 'HelpMessage 텍스트',
    },
    children: {
      control: 'object',
      description: 'DefaultTextField input 태그',
    },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputState: 'default',
    children: <input aria-label="text field" />,
  },
};

export const DefaultWithLabel: Story = {
  args: {
    inputState: 'default',
    children: <input aria-label="text field" />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
  },
};

export const DefaultWithLabelAndHasHelpMessage: Story = {
  args: {
    inputState: 'default',
    children: <input aria-label="text field" />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const DefaultIsDisabled: Story = {
  args: {
    inputState: 'default',
    children: <input disabled aria-label="text field" />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const Success: Story = {
  args: {
    inputState: 'success',
    children: <input aria-label="text field" />,
  },
};

export const SuccessWithHasHelpMessage: Story = {
  args: {
    inputState: 'success',
    children: <input aria-label="text field" />,
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const SuccessWithLabelAndHasHelpMessage: Story = {
  args: {
    inputState: 'success',
    children: <input aria-label="text field" />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const Fail: Story = {
  args: {
    inputState: 'error',
    children: <input aria-label="text field" />,
  },
};

export const FailWithHasHelpMessage: Story = {
  args: {
    inputState: 'error',
    children: <input aria-label="text field" />,
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};

export const FailrWithLabelAndHasHelpMessage: Story = {
  args: {
    inputState: 'error',
    children: <input aria-label="text field" />,
    hasLabel: true,
    label: 'Label',
    htmlFor: 'id',
    hasHelpMessage: true,
    helpMessage: 'Text helper',
  },
};
