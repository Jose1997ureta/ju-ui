import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete, FormItem, ActionChangeProps, Select } from "..";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback, useEffect, useState } from "react";

const meta: Meta<typeof Select> = {
	title: "Components/Select/Autocomplete",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

const refresh = "13";

export const AutoComplete: Story = {
	args: {},

	render: function Render() {
		const [defaultOption, setDefaultOption] = useState<any[]>([]);

		const [loading, setLoading] = useState<boolean>(false);

		const { handleBlur, setFieldValue, values } = useFormik({
			initialValues: {
				id: "13",
			},
			validationSchema: Yup.object().shape({
				id: Yup.string().required("El campo es requerido"),
			}),
			onSubmit: (ids) => {
				console.log(ids);
			},
		});

		const fcGetUser = useCallback(async () => {
			let value = null;

			if (refresh) {
				const response = await fetch(
					`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/${refresh}`
				);
				value = await response.json();
			}

			setDefaultOption([value]);
		}, []);

		useEffect(() => {
			fcGetUser();
		}, [fcGetUser]);

		const fcGetUserSearch = async (inputValue = "") => {
			setLoading(true);
			try {
				const response = await fetch(
					`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/${inputValue}`
				);
				const data = await response.json();

				setLoading(false);

				if (inputValue.trim() === "") return data;

				return [data];
			} catch (error) {
				setLoading(false);
				return [];
			}
		};

		const loadOptions = async (inputValue: string) => {
			return await fcGetUserSearch(inputValue);
		};

		const handleChange = async (item: any, option?: ActionChangeProps) => {
			if (option === "clear") {
				setFieldValue("id", "");
				setDefaultOption([]);
			} else setFieldValue("id", item.id);
		};

		const handleMenuOpen = async () => {
			const data = await fcGetUserSearch();
			setDefaultOption(data);
		};

		return (
			<div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">
				<FormItem>
					<FormItem.Label label="Ingrese valor" />
					<Autocomplete
						isLoading={loading}
						loadOption={loadOptions}
						onMenuOpen={handleMenuOpen}
						defaultOptions={
							defaultOption.length > 0 ? defaultOption : true
						}
						value={values.id}
						name="id"
						onChange={handleChange}
						onBlur={handleBlur("id")}
						pattern="number"
					/>
				</FormItem>
			</div>
		);
	},
};
