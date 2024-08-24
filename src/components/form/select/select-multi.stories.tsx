import { Meta, StoryObj } from "@storybook/react";
import { FormItem, Select } from "..";

import { useFormik } from "formik";
import * as Yup from "yup";

const colourOptions = [
	{ id: "0", name: "Todo", color: "#00B8D9" },
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
	title: "Components/Select/Multi",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Multi: Story = {
	args: {},

	render: function Render() {
		const { values, handleBlur, setFieldValue } = useFormik({
			initialValues: {
				name: ["1", "2"],
			},
			validationSchema: Yup.object().shape({
				name: Yup.array().min(1, "El campo es requerido"),
			}),
			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md ring">
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<FormItem.Select
						isMulti
						size="sm"
						data={colourOptions}
						name="name"
						onChange={({ data }) =>
							setFieldValue(
								"name",
								data.map((el) => el.id)
							)
						}
						value={values.name}
						onBlur={handleBlur("name")}
						isItemAll="only"
						color="danger"
					/>
				</FormItem>
			</div>
		);
	},
};
