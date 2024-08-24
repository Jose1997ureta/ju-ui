import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { TimePicker } from "./time";
import { ValueCalendar } from "../interface/calendar-share.interface";

const meta: Meta<typeof TimePicker> = {
	title: "Components/Time Picker",
	component: TimePicker,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
	args: {},
	render: function Render() {
		const [value, setValue] = useState<ValueCalendar>("13:00");

		return (
			<div className="border w-[400px] p-4 ">
				{/* <TimePicker
					value={value}
					onChange={setValue}
					isIcon={false}
					isIconClear={false}
				/> */}
				<TimePicker
					// classNameContainer="w-[100px] bg-red-50"
					className="w-[85px] bg-red-50"
					value={value}
					onChange={setValue}
				/>
			</div>
		);
	},
};
