import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./radio";

const meta: Meta<typeof Radio> = {
	title: "Components/Radio",
	component: Radio,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		color: {
			options: ["primary", "secondary", "neutral"],
			control: { type: "select" },
		},
		disabled: {
			control: {
				type: "boolean",
			},
		},
		value: {
			control: {
				type: "boolean",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	args: {},
};

export const Size: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Radio value="radio1" label="Radio Button" name="radio" size="sm" />
				<Radio value="radio2" name="radio" label="Radio Button" size="md" />
				<Radio value="radio3" name="radio" label="Radio Button" size="lg" />
			</div>
		);
	},
};

export const Color: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Radio
					value="radio1"
					label="Radio Button"
					name="radio"
					color="primary"
				/>
				<Radio
					value="radio2"
					name="radio"
					label="Radio Button"
					color="secondary"
				/>
				<Radio
					value="radio3"
					name="radio"
					label="Radio Button"
					color="neutral"
				/>
			</div>
		);
	},
};

export const Label: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Radio
					value="radio6"
					name="radio"
					label="Radio Button"
					color="secondary"
					description="Empresa Onroad / Expreso"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Radio
					value="radio6"
					name="radio"
					label="Radio Button"
					color="secondary"
					description="Empresa Onroad / Expreso"
					disabled
				/>
			</div>
		);
	},
};

export const Position: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Radio
					value="radio6"
					name="radio"
					label="Radio Button"
					color="secondary"
					description="Empresa Onroad / Expreso"
				/>
				<Radio
					value="radio6"
					name="radio"
					label="Radio Button"
					color="secondary"
					description="Empresa Onroad / Expreso"
					positionLabel="start"
				/>
			</div>
		);
	},
};

export const State: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Radio
					value="radio6"
					name="radio"
					label="Radio Button"
					color="secondary"
					description="Empresa Onroad / Expreso"
					error="El campo es requerido"
					touched
				/>
				<Radio
					value="radio6"
					name="radio"
					label="Radio Button"
					color="secondary"
					error="El campo es requerido"
					touched
				/>
			</div>
		);
	},
};
