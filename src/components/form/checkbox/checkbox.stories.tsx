import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "..";
import { useState } from "react";

const meta: Meta<typeof CheckBox> = {
	title: "Components/CheckBox",
	component: CheckBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		color: {
			options: [
				"primary",
				"secondary",
				"neutral",
				"success",
				"danger",
				"warning",
			],
			control: { type: "select" },
		},
		disabled: {
			control: {
				type: "boolean",
			},
		},
		required: {
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

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
	args: {},
};

export const Size: Story = {
	args: {},

	render: function Render() {
		const [value, setValue] = useState<boolean>(false);

		const handleChange = (state: boolean) => {
			setValue(state);
		};

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<CheckBox
					id="checkbox"
					value={value}
					onChange={handleChange}
					size="sm"
				/>
				<CheckBox
					id="checkbox1"
					value={value}
					onChange={handleChange}
					size="md"
				/>
				<CheckBox
					id="checkbox2"
					value={value}
					onChange={handleChange}
					size="lg"
				/>
			</div>
		);
	},
};

export const Color: Story = {
	args: {},

	render: function Render() {
		const [value, setValue] = useState<boolean>(false);

		const handleChange = (state: boolean) => {
			setValue(state);
		};

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<CheckBox
					id="checkbox1"
					value={value}
					onChange={handleChange}
					color="primary"
				/>
				<CheckBox
					id="checkbox2"
					value={value}
					onChange={handleChange}
					color="secondary"
				/>
				<CheckBox
					id="checkbox3"
					value={value}
					onChange={handleChange}
					color="neutral"
				/>
				<CheckBox
					id="checkbox4"
					value={value}
					onChange={handleChange}
					color="success"
				/>
				<CheckBox
					id="checkbox5"
					value={value}
					onChange={handleChange}
					color="warning"
				/>
				<CheckBox
					id="checkbox6"
					value={value}
					onChange={handleChange}
					color="danger"
				/>
			</div>
		);
	},
};

export const Label: Story = {
	args: {},

	render: function Render() {
		const [value, setValue] = useState<boolean>(false);

		const handleChange = (state: boolean) => {
			setValue(state);
		};

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<CheckBox
					id="checkbox1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
				/>
				<CheckBox
					id="checkbox2"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="secondary"
					description="Empresa Onroad / Expreso"
					required
				/>
				<CheckBox
					id="checkbox3"
					value={value}
					onChange={handleChange}
					color="neutral"
					description="Empresa Onroad / Expreso"
					required
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {},

	render: function Render() {
		const [value, setValue] = useState<boolean>(false);

		const handleChange = (state: boolean) => {
			setValue(state);
		};

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<CheckBox
					id="checkbox1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
					disabled
				/>
				<CheckBox
					id="checkbox2"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="secondary"
					description="Empresa Onroad / Expreso"
					required
					disabled
				/>
				<CheckBox
					id="checkbox3"
					value={value}
					onChange={handleChange}
					color="neutral"
					description="Empresa Onroad / Expreso"
					required
					disabled
				/>
			</div>
		);
	},
};

export const Position: Story = {
	args: {},

	render: function Render() {
		const [value, setValue] = useState<boolean>(false);

		const handleChange = (state: boolean) => {
			setValue(state);
		};

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<CheckBox
					id="checkbox1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
					positionLabel="start"
					description="Empresa Onroad / Expreso"
				/>
				<CheckBox
					id="checkbox2"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="secondary"
					description="Empresa Onroad / Expreso"
					required
					positionLabel="end"
				/>
			</div>
		);
	},
};

export const State: Story = {
	args: {},

	render: function Render() {
		const [value, setValue] = useState<boolean>(false);

		const handleChange = (state: boolean) => {
			setValue(state);
		};

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<CheckBox
					id="checkbox1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
					description="Empresa Onroad / Expreso"
					error="El campo es requerido"
					touched
					size="sm"
				/>
				<CheckBox
					id="checkbox2"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="secondary"
					description="Empresa Onroad / Expreso"
					required
					error="El campo es requerido"
					touched
					positionLabel="start"
				/>
				<CheckBox
					size="lg"
					id="checkbox3"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="neutral"
					description="Empresa Onroad / Expreso"
					required
					error="El campo es requerido"
					touched
					positionLabel="start"
				/>
			</div>
		);
	},
};
