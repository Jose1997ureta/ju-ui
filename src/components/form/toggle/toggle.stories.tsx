import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "..";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
	title: "Components/Toogle",
	component: Toggle,
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

type Story = StoryObj<typeof Toggle>;

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
				<Toggle id="toogle1" value={value} onChange={handleChange} size="sm" />
				<Toggle id="toogle2" value={value} onChange={handleChange} size="md" />
				<Toggle id="toogle3" value={value} onChange={handleChange} size="lg" />
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
				<Toggle
					id="toogle1"
					value={value}
					onChange={handleChange}
					color="primary"
				/>
				<Toggle
					id="toogle2"
					value={value}
					onChange={handleChange}
					color="secondary"
				/>
				<Toggle
					id="toogle3"
					value={value}
					onChange={handleChange}
					color="neutral"
				/>
				<Toggle
					id="toogle4"
					value={value}
					onChange={handleChange}
					color="success"
				/>
				<Toggle
					id="toogle5"
					value={value}
					onChange={handleChange}
					color="warning"
				/>
				<Toggle
					id="toogle6"
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
				<Toggle
					id="toogle1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
				/>
				<Toggle
					id="toogle2"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="secondary"
					description="Empresa Onroad / Expreso"
					required
				/>
				<Toggle
					id="toogle3"
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
				<Toggle
					id="toogle1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
					disabled
				/>
				<Toggle
					id="toogle2"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="secondary"
					description="Empresa Onroad / Expreso"
					required
					disabled
				/>
				<Toggle
					id="toogle3"
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
				<Toggle
					id="toogle1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
					positionLabel="start"
					description="Empresa Onroad / Expreso"
				/>
				<Toggle
					id="toogle2"
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
				<Toggle
					id="toogle1"
					value={value}
					onChange={handleChange}
					label="Empresa"
					color="primary"
					required
					description="Empresa Onroad / Expreso"
					error="El campo es requerido"
					touched
				/>
				<Toggle
					id="toogle2"
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
				<Toggle
					id="toogle3"
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
			</div>
		);
	},
};
