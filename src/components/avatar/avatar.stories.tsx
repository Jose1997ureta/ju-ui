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
					isBorder
					src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
				/>
				<Avatar
					isBorder
					src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
				/>
				<Avatar
					isBorder
					src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
				/>
				<Avatar
					isBorder
					src="https://i.pravatar.cc/150?u=a04258114e29026302d"
				/>
				<Avatar
					isBorder
					src="https://i.pravatar.cc/150?u=a04258114e29026702d"
				/>
				<Avatar
					isBorder
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
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
					isBorder
					radius="sm"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					radius="md"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					radius="lg"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
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
					isBorder
					borderColor="default"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					borderColor="primary"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					borderColor="secondary"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					borderColor="neutral"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					borderColor="success"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					borderColor="warning"
					content="hola"
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				/>
				<Avatar
					isBorder
					borderColor="danger"
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
				<Avatar size="xs" isBorder name="Antonio" />
				<Avatar size="sm" isBorder name="Antonio" />
				<Avatar name="Jose" />
				<Avatar size="lg" name="Jose" />
			</div>
		);
	},
};

export const StatusColor: Story = {
	args: {},

	render: function Render() {
		return (
			<div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">
				<Avatar name="Jose" status="active" />
				<Avatar
					isStatus
					name="Jose"
					status="pending"
					isBorder
					borderColor="secondary"
					size="xs"
				/>
				<Avatar
					isStatus
					name="Jose"
					status="inactive"
					isBorder
					borderColor="primary"
					size="sm"
				/>

				<Avatar
					isStatus
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
					status="active"
					isBorder
					borderColor="success"
					size="md"
				/>
				<Avatar
					isStatus
					src="https://i.pravatar.cc/150?u=a04258114e29026708c"
					status="active"
					isBorder
					borderColor="success"
					size="lg"
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
				<Avatar name="Jose" status="active" isDisabled />
				<Avatar name="Jose" status="pending" />
				<Avatar name="Jose" status="inactive" />
				<Avatar
					name="Jose"
					isDisabled
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
				<Avatar
					status="active"
					content={<LuBellRing className="w-5 h-5" />}
					isBorder
				/>
				<Avatar
					status="active"
					content={<LuBellRing className="w-5 h-5" />}
					isBorder
					borderColor="success"
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
							isBorder
							borderColor="success"
							bg="bg-secondary-700"
						/>
					)}
				>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
					<Avatar
						isBorder
						src="https://i.pravatar.cc/150?u=a04258114e29026708c"
						borderColor="success"
					/>
				</AvatarGroup>
			</div>
		);
	},
};
