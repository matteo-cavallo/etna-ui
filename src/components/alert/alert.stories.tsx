import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Critical Alert",
    description: "This is a critical alert",
    type: "informative",
    variant: "solid",
  },
};

export const Solid = () => {
  const alerts = [
    {
      type: "critical",
      title: "Critical Alert",
      description: "This is a critical alert",
    },
    {
      type: "danger",
      title: "Danger Alert",
      description: "This is a danger alert",
    },
    {
      type: "warning",
      title: "Warning Alert",
      description: "This is a warning alert",
    },
    {
      type: "success",
      title: "Success Alert",
      description: "This is a success alert",
    },
    {
      type: "informative",
      title: "Informative Alert",
      description: "This is an informative alert",
    },
    {
      type: "discovery",
      title: "Discovery Alert",
      description: "This is a discovery alert",
    },
  ] as const;

  return (
    <div>
      {alerts.map((alert) => (
        <Alert
          key={alert.type}
          type={alert.type}
          title={alert.title}
          description={alert.description}
        />
      ))}
    </div>
  );
};

export const Outline = () => {
  const alerts = [
    {
      type: "critical",
      title: "Critical Alert",
      description: "This is a critical alert",
    },
    {
      type: "danger",
      title: "Danger Alert",
      description: "This is a danger alert",
    },
    {
      type: "warning",
      title: "Warning Alert",
      description: "This is a warning alert",
    },
    {
      type: "success",
      title: "Success Alert",
      description: "This is a success alert",
    },
    {
      type: "informative",
      title: "Informative Alert",
      description: "This is an informative alert",
    },
    {
      type: "discovery",
      title: "Discovery Alert",
      description: "This is a discovery alert",
    },
  ] as const;

  return (
    <div>
      {alerts.map((alert) => (
        <Alert
          key={alert.type}
          type={alert.type}
          title={alert.title}
          description={alert.description}
          variant="outline"
        />
      ))}
    </div>
  );
};
