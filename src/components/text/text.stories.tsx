import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    children: "Etna UI",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Variants = () => (
  <div>
    <Text as="h1" variant="heading-1">
      Text with H1 variant
    </Text>
    <Text as="h3" variant="heading-2">
      Text with H2 variant
    </Text>
    <Text as="h3" variant="heading-3">
      Text with H3 variant
    </Text>
    <Text as="h4" variant="headline">
      Text with Headline variant
    </Text>
    <Text as="h5" variant="subheadline">
      Text with Subheadline variant
    </Text>
    <Text as="p" variant="body-large">
      Text with BodyLarge variant
    </Text>
    <Text as="p" variant="body">
      Text with Body variant
    </Text>
    <Text as="p" variant="caption">
      Text with Caption variant
    </Text>
  </div>
);

export const WithFontWeights = () => (
  <div>
    <Text as="p" variant="body" weight="light">
      Text with light weight
    </Text>
    <Text as="p" variant="body" weight="regular">
      Text with regular weight
    </Text>
    <Text as="p" variant="body" weight="medium">
      Text with medium weight
    </Text>
    <Text as="p" variant="body" weight="bold">
      Text with bold weight
    </Text>
  </div>
);

export const WithAlignments = () => (
  <div>
    <Text as="p" variant="body" align="start">
      Text with start alignment
    </Text>
    <Text as="p" variant="body" align="center">
      Text with center alignment
    </Text>
    <Text as="p" variant="body" align="end">
      Text with end alignment
    </Text>
    <Text as="p" variant="body" align="justify">
      Text with justify alignment
    </Text>
  </div>
);
