import { Meta, StoryObj } from "@storybook/react";
import { Input } from "..";
import { AiOutlineUser, AiFillApi } from "react-icons/ai";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { useState } from "react";
import { FormItem } from "../form-item/form-item";

import { useFormik } from "formik";
import * as Yup from "yup";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: { type: "text" },
		},
		type: {
			options: ["text", "password", "email"],
			control: { type: "radio" },
		},
		disabled: {
			control: { type: "boolean" },
		},
		pattern: {
			options: [
				"all",
				"number",
				"decimal",
				"alphabetic",
				"alphanumeric",
				"allAlphabetic",
				"numericAndSpace",
				"numericAndComma",
			],
			control: { type: "select" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},
};

export const Type: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [isPassword, setIsPassword] = useState<boolean>(true);
		const [value, setValue] = useState<string>("");

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Input
						placeholder="Ingresa tu nombre"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Input
						placeholder="Ingresa tu password"
						type={isPassword ? "password" : "text"}
						endContent={
							<div onClick={() => setIsPassword(!isPassword)}>
								{isPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
							</div>
						}
						onChange={(e) => setValue(e.target.value)}
						value={value}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Input
						placeholder="Ingresa tu correo"
						type="email"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</FormItem>
			</div>
		);
	},
};

export const Size: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Input
						placeholder="Ingresa tu nombre"
						type="text"
						size="sm"
						value=""
					/>
				</FormItem>
				<FormItem>
					<FormItem.Input
						placeholder="Ingresa tu password"
						type="password"
						size="md"
						value=""
					/>
				</FormItem>
				<FormItem>
					<FormItem.Input
						placeholder="Ingresa tu correo"
						type="email"
						size="lg"
						value=""
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
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className="rounded-full"
					/>
				</FormItem>

				<FormItem>
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						endContent={<AiFillApi />}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</FormItem>
			</div>
		);
	},
};

export const WithLabel: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-5 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Nombre" size="md" />
					<FormItem.Input
						id="d"
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						size="md"
						disabled={false}
						pattern=""
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" required size="sm" />
					<FormItem.Input
						value=""
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						size="sm"
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label
						label="Nombre"
						startContent={<AiOutlineUser />}
						size="lg"
					/>
					<FormItem.Input
						value=""
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						size="lg"
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Nombre" endContent={<AiFillApi />} />
					<FormItem.Input
						value=""
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label
						label="Nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
					/>
					<FormItem.Input
						value=""
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label
						label="Nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
						required
					/>
					<FormItem.Input
						value=""
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
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
		const { handleChange, handleBlur, errors, touched, values } = useFormik({
			initialValues: {
				company: "",
			},
			validationSchema: Yup.object().shape({
				company: Yup.string().required("El campo es requerido"),
			}),
			onSubmit: (values) => {
				console.log(values);
			},
		});

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label
						label="Empresa"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
					/>
					<FormItem.Input
						value=""
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label
						label="Empresa"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
						required
					/>
					<FormItem.Input
						name="company"
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
						value={values.company}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.company}
						touched={touched.company}
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
		const [value, setValue] = useState<string>("Onroad");

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Empresa" required />
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
						disabled
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</FormItem>

				<FormItem disabled>
					<FormItem.Label label="Empresa" required />
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						endContent={<AiFillApi />}
						error="Ingrese valor"
						touched
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</FormItem>
			</div>
		);
	},
};

export const Pattern: Story = {
	args: {
		placeholder: "Ingresar tu nombre",
	},

	render: function Render() {
		const [valueAll, setValueAll] = useState<string>("");
		const [valueNumber, setValueNumber] = useState<string>("");
		const [valueDecimal, setValueDecimal] = useState<string>("");

		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="All" />
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						pattern=""
						value={valueAll}
						onChange={(e) => setValueAll(e.target.value)}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Number" />
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						pattern="number"
						value={valueNumber}
						onChange={(e) => setValueNumber(e.target.value)}
					/>
				</FormItem>

				<FormItem>
					<FormItem.Label label="Decimal" />
					<FormItem.Input
						placeholder="Ingresar tu nombre"
						startContent={<AiOutlineUser />}
						pattern="decimal"
						value={valueDecimal}
						onChange={(e) => setValueDecimal(e.target.value)}
					/>
				</FormItem>
			</div>
		);
	},
};
