import type { Meta, StoryObj } from '@storybook/react';
import { KyNav } from '..';

const meta: Meta<typeof KyNav> = {
  component: KyNav,
};

export default meta;
type Story = StoryObj<typeof KyNav>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <KyNav />,
};

export const WithTitleElement: Story = {
  render: () => <KyNav titleElement={<TitleElement />} />,
};

const TitleElement = () => {
  return (
      <h1>Example Title</h1>
  );
};
