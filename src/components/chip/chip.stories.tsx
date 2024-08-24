import { Meta, StoryObj } from "@storybook/react";
import { LuBellRing } from "react-icons/lu";
import { Chip } from "./chip";

const meta: Meta<typeof Chip> = {
	title: "Components/Chip",
	component: Chip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Color: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Chip variant="flat" color="primary">
					Primary
				</Chip>
				<Chip variant="flat" color="secondary">
					Secondary
				</Chip>
				<Chip variant="flat" color="neutral">
					Neutral
				</Chip>
				<Chip variant="flat" color="success">
					Suecess
				</Chip>
				<Chip variant="flat" color="warning">
					Warning
				</Chip>
				<Chip variant="flat" color="danger">
					Danger
				</Chip>

				<Chip variant="flat" color="white">
					White
				</Chip>
			</div>
		);
	},
};

export const Variant: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Chip variant="solid" color="primary">
					Primary
				</Chip>
				<Chip variant="solid" color="secondary">
					Secondary
				</Chip>
				<Chip variant="solid" color="neutral">
					Neutral
				</Chip>
				<Chip variant="solid" color="success">
					Suecess
				</Chip>
				<Chip variant="solid" color="warning">
					Warning
				</Chip>
				<Chip variant="solid" color="danger">
					Danger
				</Chip>

				<Chip variant="solid" color="white">
					White
				</Chip>
			</div>
		);
	},
};

export const Size: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Chip color="primary" size="sm">
					Primary
				</Chip>
				<Chip color="secondary" size="md">
					Secondary
				</Chip>
				<Chip color="neutral" size="lg">
					Neutral
				</Chip>
			</div>
		);
	},
};

export const Radius: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Chip color="primary" radius="sm">
					Small
				</Chip>
				<Chip color="primary" radius="md">
					Medium
				</Chip>
				<Chip color="primary" radius="lg">
					Large
				</Chip>
				<Chip color="primary" radius="full">
					Full
				</Chip>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Chip color="primary" isDisabled>
					Primary
				</Chip>
				<Chip color="secondary">Secondary</Chip>
			</div>
		);
	},
};

export const Custom: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Chip color="primary">
					<LuBellRing className="mr-1" />
					Small
				</Chip>
				<Chip color="secondary">
					Medium <LuBellRing className="ml-1" />
				</Chip>
			</div>
		);
	},
};
