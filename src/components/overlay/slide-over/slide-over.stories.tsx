import { Meta, StoryObj } from "@storybook/react";
import { SliderOver } from "./slide-over";
import { Button } from "../../button/button";
import { useState } from "react";

const meta: Meta<typeof SliderOver> = {
	title: "Components/SliderOver",
	component: SliderOver,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SliderOver>;

export const SlideRight: Story = {
	args: {},

	render: function Render() {
		const [show, setShow] = useState<boolean>(false);
		return (
			<>
				<Button
					onClick={() => {
						setShow(true);
					}}
				>
					Abrir
				</Button>

				<SliderOver
					onCloseOut={() => setShow(false)}
					show={show}
					isOverLay={false}
				>
					<div className="bg-secondary-500">
						<Button onClick={() => setShow(false)}>Cerrar</Button>
					</div>
				</SliderOver>
			</>
		);
	},
};
