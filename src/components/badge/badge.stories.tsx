import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { Button } from "../button/button";
import { LuBellRing } from "react-icons/lu";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Color: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Badge content={50} color="primary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Primary
					</Button>
				</Badge>
				<Badge content={50} color="secondary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Secondary
					</Button>
				</Badge>

				<Badge content={50} color="neutral" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Neutral
					</Button>
				</Badge>
				<Badge content={50} color="success" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Success
					</Button>
				</Badge>
				<Badge content={50} color="warning" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Warning
					</Button>
				</Badge>
				<Badge content={50} color="danger" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Danger
					</Button>
				</Badge>
			</div>
		);
	},
};

export const Size: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Badge
					content={50}
					color="primary"
					size="sm"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						Abrir Sm
					</Button>
				</Badge>
				<Badge
					content={50}
					color="secondary"
					size="md"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						Abrir Md
					</Button>
				</Badge>

				<Badge
					content={50}
					color="neutral"
					size="lg"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						Abrir lg
					</Button>
				</Badge>
			</div>
		);
	},
};

export const Position: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-4 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Badge
					content={50}
					color="primary"
					position="top-right"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						top-right
					</Button>
				</Badge>
				<Badge
					content={50}
					color="secondary"
					position="top-left"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						top-left
					</Button>
				</Badge>

				<Badge
					content={50}
					color="neutral"
					position="bottom-right"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						bottom-right
					</Button>
				</Badge>
				<Badge
					content={50}
					color="success"
					position="bottom-left"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						bottom-left
					</Button>
				</Badge>
			</div>
		);
	},
};

export const ShowOutline: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-4 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Badge content={50} color="primary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						top-right
					</Button>
				</Badge>
				<Badge
					content={50}
					color="primary"
					showOutline={false}
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						top-left
					</Button>
				</Badge>
			</div>
		);
	},
};

export const Content: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-4 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Badge content={5} color="primary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						top-right
					</Button>
				</Badge>
				<Badge content="new" color="primary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						top-left
					</Button>
				</Badge>
				<Badge content="5" color="primary">
					<LuBellRing className="w-10 h-10" />
				</Badge>
				<Badge
					content={<LuBellRing />}
					color="secondary"
					classNameContainer="w-full"
				>
					<Button color="neutral" className="w-full">
						top-left
					</Button>
				</Badge>
			</div>
		);
	},
};

export const Status: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="grid grid-cols-3 gap-3 border py-4 px-4 w-[760px] border-neutral-300 rounded-md">
				<Badge content={50} color="primary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Primary
					</Button>
				</Badge>
				<Badge content={50} color="secondary" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Secondary
					</Button>
				</Badge>

				<Badge content={50} color="neutral" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Neutral
					</Button>
				</Badge>
				<Badge content={50} color="success" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Success
					</Button>
				</Badge>
				<Badge content={50} color="warning" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Warning
					</Button>
				</Badge>
				<Badge content={50} color="danger" classNameContainer="w-full">
					<Button color="neutral" className="w-full">
						Danger
					</Button>
				</Badge>
			</div>
		);
	},
};
