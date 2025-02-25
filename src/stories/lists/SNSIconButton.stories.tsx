import type { Meta, StoryObj } from '@storybook/react';

import SNSIconButtons from '@components/buttons/SNSIconButtons';

const meta: Meta<typeof SNSIconButtons> = {
  title: 'Lists/SNSIconButtonList',
  component: SNSIconButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
