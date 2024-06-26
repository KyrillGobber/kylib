import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingPage } from '..';

const meta: Meta<typeof LoadingPage> = {
  component: LoadingPage,
};

export default meta;
type Story = StoryObj<typeof LoadingPage>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <LoadingPage />,
};
