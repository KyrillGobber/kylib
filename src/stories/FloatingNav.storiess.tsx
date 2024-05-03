import { FloatingNav } from '@/components/FloatingNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FloatingNav> = {
  component: FloatingNav,
};

export default meta;
type Story = StoryObj<typeof FloatingNav>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <FloatingNav />,
};

