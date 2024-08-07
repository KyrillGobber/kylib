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

const TitleElement = () => {
  return (
      <h1>Example Title</h1>
  );
};
export const WithTitleElement: Story = {
  render: () => <KyNav titleElement={<TitleElement />} />,
};

const additionalElements = () => {
    return [
        <p>element 1</p>,
        <p>element 2</p>,
        <p>element 3</p>,
    ];
}

export const WithAdditionalElements: Story = {
  render: () => <KyNav titleElement={<TitleElement />} addRightElements={additionalElements()} />,
};
