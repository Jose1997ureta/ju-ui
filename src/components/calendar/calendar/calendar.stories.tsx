import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { CalendarPicker } from "./calendar";
import { ValueCalendar } from "../interface/calendar-share.interface";

const meta: Meta<typeof CalendarPicker> = {
	title: "Components/Calendar Picker",
	component: CalendarPicker,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalendarPicker>;

export const Default: Story = {
	args: {},
};

export const DatePicker: Story = {
	args: {},

	render: function Render() {
		const [value, onChange] = useState<ValueCalendar>(new Date());

		return (
			<div className="border w-[400px] p-4">
				<CalendarPicker
					value={value}
					onChange={onChange}
					showDoubleView
					type="date-picker"
				/>
			</div>
		);
	},
};

export const DateRangePicker: Story = {
	args: {},

	render: function Render() {
		const [value, onChange] = useState<ValueCalendar>([
			new Date(),
			new Date(),
		]);

		return (
			<div className="border w-[400px] p-4">
				<CalendarPicker
					value={value}
					onChange={onChange}
					showDoubleView
					type="date-range-picker"
				/>
			</div>
		);
	},
};
