import type { Meta, StoryObj } from '@storybook/react';
import { KyFooter } from '..';

const meta: Meta<typeof KyFooter> = {
  component: KyFooter,
};

export default meta;
type Story = StoryObj<typeof KyFooter>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <KyFooter footerText="gaggfurz" footerSourceText="Source code on GitHub"/>,
};
