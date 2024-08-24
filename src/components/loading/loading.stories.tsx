import { Meta, StoryObj } from "@storybook/react";

import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
	title: "Components/Loading",
	component: Loading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
	args: {},

	render: function Render() {
		return (
			<>
				<div className="border mt-2 w-[400px] p-4 absolute h-[300px]">
					<Loading size="lg" color="neutral" stroke="base" />
				</div>
			</>
		);
	},
};
