import { Meta, StoryObj } from "@storybook/react";
import { LuBellRing } from "react-icons/lu";
import { Avatar } from "./avatar";
import { AvatarGroup } from "./avatar-group";

const meta: Meta<typeof Avatar> = {
	title: "Components/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Size: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar
					size="xs"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					size="sm"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					size="md"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					size="lg"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
			</div>
		);
	},
};

export const Border: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar
					src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
					border="default"
				/>
				<Avatar
					src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
					border="default"
				/>
				<Avatar
					src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
					border="default"
				/>
				<Avatar
					src="https://i.pravatar.cc/150?u=a04258114e29026302d"
					border="default"
				/>
				<Avatar
					src="https://i.pravatar.cc/150?u=a04258114e29026702d"
					border="default"
				/>
				<Avatar
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
					border="default"
				/>
			</div>
		);
	},
};

export const Radius: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar
					radius="sm"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					radius="md"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					radius="lg"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					radius="full"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
			</div>
		);
	},
};

export const BorderColor: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar
					border="default"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					border="primary"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					border="secondary"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					border="neutral"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					border="success"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					border="warning"
					content="hola"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					border="danger"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
			</div>
		);
	},
};

export const Name: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar size="xs" name="+105" />
				<Avatar size="sm" name="Antonio" />
				<Avatar name="Jose" />
				<Avatar size="lg" name="Jose" />
			</div>
		);
	},
};

export const Status: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar name="Jose" status="active" />
				<Avatar name="Jose" status="pending" border="secondary" size="xs" />
				<Avatar name="Jose" status="inactive" border="primary" size="sm" />

				<Avatar
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
					status="active"
					border="success"
					size="md"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar name="Jose" status="active" disabled />
				<Avatar name="Jose" status="pending" />
				<Avatar name="Jose" status="inactive" />
				<Avatar
					name="Jose"
					disabled
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
			</div>
		);
	},
};

export const Custom: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar status="active" content={<LuBellRing className="w-5 h-5" />} />
				<Avatar status="active" content={<LuBellRing className="w-5 h-5" />} />
				<Avatar
					status="active"
					content={<LuBellRing className="w-5 h-5" />}
					border="success"
				/>
			</div>
		);
	},
};

export const AvatarGroupC: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<AvatarGroup
					renderCount={({ total }) => (
						<Avatar
							name={`+${total}`}
							border="success"
							className="text-white bg-secondary-700"
						/>
					)}
				>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
					<Avatar
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						border="success"
					/>
				</AvatarGroup>
			</div>
		);
	},
};
