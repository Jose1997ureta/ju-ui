import { Meta, StoryObj } from "@storybook/react";
import { FormItem, Select } from "..";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

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
	title: "Components/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {},
};

export const Color: Story = {
	args: {},

	render: function Render() {
		const {
			values,

			handleBlur,

			setFieldValue,
		} = useFormik({
			initialValues: {
				id: "",
			},

			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="grid grid-cols-1 gap-2 border py-4 px-4 border-neutral-300 rounded-md w-[300px]">
				<Select
					name="id"
					data={colourOptions}
					onChange={({ item }) => setFieldValue("id", item.id)}
					color="primary"
					value={values.id}
					onBlur={handleBlur("id")}
				/>
				<Select
					data={colourOptions}
					name="id"
					onChange={({ item }) => setFieldValue("id", item.id)}
					color="secondary"
					value={values.id}
					onBlur={handleBlur("id")}
				/>
				<Select
					name="id"
					data={colourOptions}
					onChange={({ item }) => setFieldValue("id", item.id)}
					color="neutral"
					value={values.id}
					onBlur={handleBlur("id")}
				/>
			</div>
		);
	},
};

export const Size: Story = {
	args: {},

	render: function Render() {
		const {
			values,

			handleBlur,

			setFieldValue,
		} = useFormik({
			initialValues: {
				id: "",
			},

			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="grid grid-cols-1 gap-2 border py-4 px-4 border-neutral-300 rounded-md w-[300px]">
				<Select
					name="id"
					data={colourOptions}
					onChange={({ item }) => setFieldValue("id", item.id)}
					size="sm"
					value={values.id}
					onBlur={handleBlur("id")}
				/>
				<Select
					data={colourOptions}
					name="id"
					onChange={({ item }) => setFieldValue("id", item.id)}
					size="md"
					value={values.id}
					onBlur={handleBlur("id")}
				/>
				<Select
					size="lg"
					name="id"
					data={colourOptions}
					onChange={({ item }) => setFieldValue("id", item.id)}
					value={values.id}
					onBlur={handleBlur("id")}
				/>
			</div>
		);
	},
};

export const Label: Story = {
	args: {},

	render: function Render() {
		const {
			values,

			handleBlur,

			setFieldValue,
		} = useFormik({
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
					/>
				</FormItem>
				<FormItem>
					<FormItem.Label label="Ingrese valor" required />
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
				<FormItem>
					<FormItem.Label
						label="Ingrese valor"
						required
						startContent={<AiOutlineUser />}
					/>
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
			</div>
		);
	},
};

export const Loading: Story = {
	args: {},

	render: function Render() {
		const [data, setData] = useState<any[]>([]);
		const [loading, setLoading] = useState<boolean>(false);
		const {
			values,

			handleBlur,

			setFieldValue,
		} = useFormik({
			initialValues: {
				id: "",
			},

			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		useEffect(() => {
			setLoading(true);
			const time = setTimeout(() => {
				setData(colourOptions);
				setLoading(false);
			}, 3000);

			return () => {
				clearTimeout(time);
			};
		}, []);

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						name="id"
						data={data}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
						isLoading={loading}
					/>
				</FormItem>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {},

	render: function Render() {
		const {
			values,

			handleBlur,

			setFieldValue,
		} = useFormik({
			initialValues: {
				id: "",
			},

			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem disabled>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
				<FormItem disabled>
					<FormItem.Label label="Ingrese valor" required />
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
				<FormItem disabled>
					<FormItem.Label
						label="Ingrese valor"
						required
						startContent={<AiOutlineUser />}
					/>
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
					/>
				</FormItem>
			</div>
		);
	},
};

export const State: Story = {
	args: {},

	render: function Render() {
		const { values, errors, touched, handleBlur, setFieldValue } = useFormik({
			initialValues: {
				id: "",
			},
			validationSchema: Yup.object().shape({
				id: Yup.string().required("El campo es requerido"),
			}),
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
						error={errors.id}
						touched={touched.id}
					/>
				</FormItem>
				<FormItem>
					<FormItem.Label label="Ingrese valor" required />
					<FormItem.Select
						name="id"
						data={colourOptions}
						onChange={({ item }) => setFieldValue("id", item.id)}
						color="primary"
						value={values.id}
						onBlur={handleBlur("id")}
						error={errors.id}
						touched={touched.id}
					/>
				</FormItem>
			</div>
		);
	},
};

export const Search: Story = {
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
					/>
				</FormItem>
			</div>
		);
	},
};
