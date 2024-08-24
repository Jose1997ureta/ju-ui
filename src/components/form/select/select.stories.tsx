import { Meta, StoryObj } from "@storybook/react";
import { FormItem, Select } from "..";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import { Button } from "@/components/button";
import { useRef } from "react";
import { SelectInstance } from "react-select";

const colourOptions = [
	{ id: "1", name: "Ocean", color: "#00B8D9" },
	{ id: "2", name: "Blue", color: "#0052CC", disabled: true },
	{ id: "3", name: "Purple", color: "#5243AA" },
	{ id: "4", name: "Red", color: "#FF5630" },
	{ id: "5", name: "Orange", color: "#FF8B00" },
	{ id: "6", name: "Yellow", color: "#FFC400" },
	{ id: "7", name: "Green", color: "#36B37E" },
	{ id: "8", name: "Forest", color: "#00875A" },
	{ id: "9", name: "Slate", color: "#253858" },
	{ id: "10", name: "Silver", color: "#666666" },
];

const meta: Meta<typeof Select> = {
	title: "Components/Select/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const WidthMenu: Story = {
	args: {},

	render: function Render() {
		const { values, handleBlur, setFieldValue } = useFormik({
			initialValues: {
				id: "",
			},

			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
						widthMenu={400}
					/>
				</FormItem>
			</div>
		);
	},
};

export const IconStart: Story = {
	args: {},

	render: function Render() {
		const { values, handleBlur, setFieldValue } = useFormik({
			initialValues: {
				id: "",
			},
			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						data={colourOptions}
						name="id"
						onChange={({ item }) => setFieldValue("id", item.id)}
						startValueContent={
							<AiOutlineUser
								onMouseDown={(e) => {
									e.preventDefault();
									e.stopPropagation();
									alert();
								}}
							/>
						}
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
			</div>
		);
	},
};

export const CustomItem: Story = {
	args: {},

	render: function Render() {
		const { values, handleBlur, setFieldValue } = useFormik({
			initialValues: {
				id: "",
			},
			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						data={colourOptions}
						name="id"
						onChange={({ item }) => setFieldValue("id", item.id)}
						childrenOption={({ data }) => {
							return (
								<div className="flex items-center gap-1">
									<AiOutlineUser />
									<p className="text-sm">{data.name}</p>
								</div>
							);
						}}
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
			</div>
		);
	},
};

export const CustomValue: Story = {
	args: {},

	render: function Render() {
		const selectRef = useRef<SelectInstance<any> | null>(null);
		const { values, handleBlur, setFieldValue } = useFormik({
			initialValues: {
				id: "",
			},
			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<Button onClick={() => selectRef.current?.focus()}>hola</Button>
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						ref={selectRef}
						data={colourOptions}
						name="id"
						onChange={({ item }) => setFieldValue("id", item.id)}
						childrenSingleValue={({ data }) => {
							return (
								<div className="flex items-center gap-2">
									<AiOutlineUser />
									<p>{data.name}</p>
								</div>
							);
						}}
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
			</div>
		);
	},
};
