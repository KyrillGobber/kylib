import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button variant="default" onClick={() => console.log('clicked')}>gaggi</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary" onClick={() => console.log('clicked')}>gaggi</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost" onClick={() => console.log('clicked')}>gaggi</Button>,
};

export const Outline: Story = {
  render: () => <Button variant="outline" onClick={() => console.log('clicked')}>gaggi</Button>,
};

export const Argsample: Story = {
  args: {
        variant: 'default',
        onClick: () => console.log('argsample'),
        children: 'argsample',
  },
};
