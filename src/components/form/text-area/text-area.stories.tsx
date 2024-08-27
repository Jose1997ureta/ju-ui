import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./text-area";
import { AiOutlineUser, AiFillApi } from "react-icons/ai";

import { useState } from "react";

import { FormItem } from "../form-item/form-item";

const meta: Meta<typeof TextArea> = {
	title: "Components/TextArea",
	component: TextArea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: { type: "text" },
		},

		disabled: {
			control: { type: "boolean" },
		},
		maxLength: {
			control: { type: "number" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},
};

export const Size: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [value, setValue] = useState<string>("");
		return (
			<div className=" grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="sm"
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="md"
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="lg"
					/>
				</FormItem>
			</div>
		);
	},
};

export const State: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [value, setValue] = useState<string>("");
		return (
			<div className=" grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="sm"
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="sm"
						error="Ingrese el nombre valido"
						touched
					/>
				</FormItem>
			</div>
		);
	},
};

export const WithIcon: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [value, setValue] = useState<string>("");
		return (
			<div className=" grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="sm"
						startContent={<AiOutlineUser />}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="md"
						startContent={<AiFillApi />}
						disabled
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="lg"
						startContent={<AiFillApi />}
						error="Ingrese un valor válido"
						touched
					/>
				</FormItem>
			</div>
		);
	},
};

export const Counter: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [value, setValue] = useState<string>("");
		return (
			<div className=" grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="sm"
						startContent={<AiOutlineUser />}
						isLabelCounter
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="md"
						startContent={<AiFillApi />}
						isLabelCounter
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="lg"
						startContent={<AiFillApi />}
						isLabelCounter
						error="Ingrese un valor válido"
						touched
					/>
				</FormItem>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [value, setValue] = useState<string>("");
		return (
			<div className=" grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<FormItem disabled>
					<FormItem.Label label="Nombre" />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="sm"
						startContent={<AiOutlineUser />}
						isLabelCounter
					/>
				</FormItem>
				<FormItem disabled>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="md"
						startContent={<AiFillApi />}
						isLabelCounter
					/>
				</FormItem>
				<FormItem>
					<FormItem.Label label="Nombre" required />
					<FormItem.TextArea
						placeholder="Ingresa tu nombre"
						maxLength={40}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						size="lg"
						startContent={<AiFillApi />}
						isLabelCounter
						error="Ingrese un valor válido"
						touched
						disabled
					/>
				</FormItem>
			</div>
		);
	},
};
