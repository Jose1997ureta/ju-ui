import type { Meta, StoryObj } from "@storybook/react";
import { AiFillApi } from "react-icons/ai";

import { ButtonIcon } from "./button-icon";

const meta: Meta<typeof ButtonIcon> = {
	title: "Components/Button Icon",
	component: ButtonIcon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
	args: {
		children: <AiFillApi />,
		size: "sm",
	},
};

export const Sizes: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<ButtonIcon variant="solid" color="primary" size="xs">
					<AiFillApi className="" />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="primary" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="primary" size="md">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="primary" size="lg">
					<AiFillApi />
				</ButtonIcon>
			</div>
		);
	},
};

export const Colors: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<ButtonIcon variant="solid" color="default" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="primary" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="secondary" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="neutral" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="success" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="warning" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="solid" color="danger" size="sm">
					<AiFillApi />
				</ButtonIcon>
			</div>
		);
	},
};

export const Variant: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<ButtonIcon variant="solid" color="default" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="outline" color="default" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="light" color="default" size="sm">
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="flat" color="default" size="sm">
					<AiFillApi />
				</ButtonIcon>
			</div>
		);
	},
};

export const Loading: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<ButtonIcon variant="solid" color="neutral" size="sm" loading>
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="outline" color="neutral" size="sm" loading>
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="light" color="neutral" size="sm" loading>
					<AiFillApi />
				</ButtonIcon>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md flex-wrap">
				<ButtonIcon variant="light" color="default" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>
				<ButtonIcon variant="light" color="primary" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>
				<ButtonIcon variant="light" color="secondary" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>

				<ButtonIcon variant="light" color="neutral" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>
				<ButtonIcon variant="light" color="success" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>
				<ButtonIcon variant="light" color="warning" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>
				<ButtonIcon variant="light" color="danger" size="sm" disabled>
					<AiFillApi />
				</ButtonIcon>
			</div>
		);
	},
};
