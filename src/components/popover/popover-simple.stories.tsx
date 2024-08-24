import { Meta, StoryObj } from "@storybook/react";
import { Button, CheckBox, PopOver } from "..";
import { PopOverInline } from "./popover-inline";
import { useState } from "react";
import { PopoverPosition } from "react-tiny-popover";
import { ColorProps } from "@/interfaces";

const meta: Meta<typeof PopOver> = {
	title: "Components/PopOver/Simple",
	component: PopOver,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PopOver>;

export const Hover: Story = {
	args: {},

	render: function Render() {
		return (
			<PopOverInline
				textContent={
					<p className="text-xs text-white">
						Por haga click para mostrar la informacion
					</p>
				}
			>
				<Button color="neutral">Abrir</Button>
			</PopOverInline>
		);
	},
};

export const Click: Story = {
	args: {},

	render: function Render() {
		const [isShow, setIsShow] = useState<boolean>(false);

		return (
			<PopOverInline
				onClickOutside={() => setIsShow(false)}
				isShow={isShow}
				eventOpen="click"
				textContent={
					<p className="text-xs text-white">
						Por haga click para mostrar la informacion
					</p>
				}
			>
				<Button color="neutral" onClick={() => setIsShow(true)}>
					Abrir
				</Button>
			</PopOverInline>
		);
	},
};

export const Color: Story = {
	args: {},

	render: function Render() {
		const [isShow, setIsShow] = useState<boolean>(true);
		const [color, setColor] = useState<ColorProps>("primary");

		const handleChange = (value: ColorProps) => {
			setColor(value);
		};

		return (
			<div className="grid grid-cols-3 w-[760px] gap-4 border py-4 px-4  border-neutral-300 rounded-md">
				<div className="grid-cols-1">
					<p className="">Position</p>
					<div className="divide-y">
						<CheckBox
							id="top"
							onChange={() => handleChange("primary")}
							value={color === "primary"}
							label="Primary"
							className="py-2"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("secondary")}
							value={color === "secondary"}
							className="py-2"
							label="Secondary"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("neutral")}
							value={color === "neutral"}
							className="py-2"
							label="Neutral"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("success")}
							value={color === "success"}
							className="py-2"
							label="Success"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("warning")}
							value={color === "warning"}
							className="py-2"
							label="Warning"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("danger")}
							value={color === "danger"}
							className="py-2"
							label="Danger"
						/>
					</div>
				</div>
				<div className="grid-cols-2">
					<PopOverInline
						onClickOutside={() => setIsShow(false)}
						isShow={isShow}
						eventOpen="click"
						textContent={
							<p className="text-xs text-white">
								Por haga click para mostrar la informacion
							</p>
						}
						className="w-full"
						bg={color}
					>
						<Button
							color="neutral"
							onClick={() => setIsShow(true)}
							className="w-full justify-center"
						>
							Continue
						</Button>
					</PopOverInline>
				</div>
			</div>
		);
	},
};

export const Position: Story = {
	args: {},

	render: function Render() {
		const [isShow, setIsShow] = useState<boolean>(true);
		const [position, setPosition] = useState<PopoverPosition>("top");

		const handleChange = (value: PopoverPosition) => {
			setPosition(value);
		};

		return (
			<div className="grid grid-cols-3 w-[760px] gap-4 border py-4 px-4  border-neutral-300 rounded-md">
				<div className="grid-cols-1">
					<p className="">Position</p>
					<div className="divide-y">
						<CheckBox
							id="top"
							onChange={() => handleChange("top")}
							value={position === "top"}
							label="Top"
							className="py-2"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("bottom")}
							value={position === "bottom"}
							className="py-2"
							label="Bottom"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("right")}
							value={position === "right"}
							className="py-2"
							label="Right"
						/>
						<CheckBox
							id="top"
							onChange={() => handleChange("left")}
							value={position === "left"}
							className="py-2"
							label="Left"
						/>
					</div>
				</div>
				<div className="grid-cols-2">
					<PopOverInline
						onClickOutside={() => setIsShow(false)}
						isShow={isShow}
						positions={[position]}
						eventOpen="click"
						textContent={
							<p className="text-xs text-white">
								Por haga click para mostrar la informacion
							</p>
						}
						className="w-full"
					>
						<Button
							color="neutral"
							onClick={() => setIsShow(true)}
							className="w-full justify-center"
						>
							Mostrar
						</Button>
					</PopOverInline>
				</div>
			</div>
		);
	},
};
