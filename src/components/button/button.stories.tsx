import type { Meta, StoryObj } from "@storybook/react";
import { AiFillApi } from "react-icons/ai";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
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
				<Button variant="solid" color="primary" size="sm">
					Button
				</Button>

				<Button variant="solid" color="primary" size="md">
					Button
				</Button>

				<Button variant="solid" color="primary" size="lg">
					Button
				</Button>
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
				<Button variant="solid" color="primary">
					Primary
				</Button>

				<Button variant="solid" color="secondary">
					Secondary
				</Button>

				<Button variant="solid" color="neutral">
					Neutral
				</Button>

				<Button variant="solid" color="success">
					Success
				</Button>

				<Button variant="solid" color="warning">
					Warning
				</Button>

				<Button variant="solid" color="danger">
					Danger
				</Button>
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
				<Button variant="outline" color="primary">
					Primary
				</Button>

				<Button variant="outline" color="secondary">
					Secondary
				</Button>

				<Button variant="outline" color="neutral">
					Neutral
				</Button>

				<Button variant="outline" color="success">
					Success
				</Button>

				<Button variant="outline" color="warning">
					Warning
				</Button>

				<Button variant="outline" color="danger">
					Danger
				</Button>
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
				<Button variant="solid" color="primary" loading>
					Primary
				</Button>

				<Button variant="outline" color="secondary" loading>
					Secondary
				</Button>

				<Button variant="solid" color="neutral" loading>
					Neutral
				</Button>

				<Button variant="outline" color="success" loading>
					Success
				</Button>

				<Button variant="solid" color="warning" loading>
					Warning
				</Button>

				<Button variant="outline" color="danger" loading>
					Danger
				</Button>
			</div>
		);
	},
};

export const WithIcons: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Button
					variant="solid"
					color="primary"
					startContent={<AiFillApi />}
				>
					Primary
				</Button>

				<Button
					variant="outline"
					color="secondary"
					endContent={<AiFillApi />}
				>
					Secondary
				</Button>

				<Button
					variant="solid"
					color="neutral"
					startContent={<AiFillApi />}
				>
					Neutral
				</Button>

				<Button
					variant="outline"
					color="success"
					endContent={<AiFillApi />}
				>
					Success
				</Button>

				<Button
					variant="solid"
					color="warning"
					startContent={<AiFillApi />}
				>
					Warning
				</Button>

				<Button variant="outline" color="danger" endContent={<AiFillApi />}>
					Danger
				</Button>
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
				<Button
					variant="solid"
					color="primary"
					startContent={<AiFillApi />}
					disabled
				>
					Primary
				</Button>
				<Button
					variant="outline"
					color="primary"
					startContent={<AiFillApi />}
					disabled
				>
					Primary
				</Button>

				<Button
					variant="solid"
					color="secondary"
					endContent={<AiFillApi />}
					disabled
				>
					Secondary
				</Button>

				<Button
					variant="outline"
					color="secondary"
					endContent={<AiFillApi />}
					disabled
				>
					Secondary
				</Button>

				<Button
					variant="solid"
					color="neutral"
					startContent={<AiFillApi />}
					disabled
				>
					Neutral
				</Button>

				<Button
					variant="outline"
					color="neutral"
					startContent={<AiFillApi />}
					disabled
				>
					Neutral
				</Button>

				<Button
					variant="solid"
					color="success"
					endContent={<AiFillApi />}
					disabled
				>
					Success
				</Button>

				<Button
					variant="outline"
					color="success"
					endContent={<AiFillApi />}
					disabled
				>
					Success
				</Button>

				<Button variant="solid" startContent={<AiFillApi />} disabled>
					Warning
				</Button>

				<Button
					variant="outline"
					color="warning"
					startContent={<AiFillApi />}
					disabled
				>
					Warning
				</Button>

				<Button
					variant="solid"
					color="danger"
					endContent={<AiFillApi />}
					disabled
				>
					Danger
				</Button>
				<Button
					variant="outline"
					color="danger"
					endContent={<AiFillApi />}
					disabled
				>
					Danger
				</Button>
			</div>
		);
	},
};

export const WithLabel: Story = {
	args: {
		children: "Button",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Button
					variant="solid"
					color="primary"
					endContent={
						<span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-primary-800 bg-primary-500 rounded-full">
							9
						</span>
					}
				>
					Primary
				</Button>

				<Button
					variant="solid"
					color="secondary"
					endContent={
						<span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-secondary-800 bg-secondary-500 rounded-full">
							9
						</span>
					}
				>
					Secondary
				</Button>

				<Button
					variant="solid"
					color="neutral"
					startContent={
						<span className="inline-flex items-center justify-center w-5 h-5 me-2 text-xs font-semibold text-neutral-300 bg-neutral-500 rounded-full">
							9
						</span>
					}
				>
					Neutral
				</Button>

				<Button
					variant="solid"
					color="success"
					startContent={
						<span className="inline-flex items-center justify-center w-5 h-5 me-2 text-xs font-semibold text-success-800 bg-success-500 rounded-full">
							9
						</span>
					}
				>
					Success
				</Button>

				<Button
					variant="solid"
					color="warning"
					endContent={
						<span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-warning-800 bg-warning-100 rounded-full">
							9
						</span>
					}
				>
					Warning
				</Button>

				<Button
					variant="solid"
					color="danger"
					endContent={
						<span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-danger-800 bg-danger-500 rounded-full">
							9
						</span>
					}
				>
					Danger
				</Button>
			</div>
		);
	},
};
