import { Meta, StoryObj } from "@storybook/react";

import { Tab } from "./tab";
import { TabItem } from "./tab-item";
import { useState } from "react";

import { FaUser } from "react-icons/fa";

const data = [
	{ id: "item1", name: "Item 1" },
	{ id: "item2", name: "Item 2" },
	{ id: "item3", name: "Item 3" },
	{ id: "item4", name: "Item 4" },
	{ id: "item5", name: "Item 5" },
	{ id: "item6", name: "Item 6" },
];

const meta: Meta<typeof Tab> = {
	title: "Components/Tab",
	component: Tab,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
	args: {},

	render: function Render() {
		const [tab1, setTab1] = useState<string>("");
		const [tab2, setTab2] = useState<string>("");

		const handleChangeTab1 = (key: string) => {
			setTab1(key);
		};
		const handleChangeTab2 = (key: string) => {
			setTab2(key);
		};

		return (
			<>
				<div className="border mt-2 w-[400px] p-4">
					<Tab
						activeKey={tab1}
						disabledKeys={["hola2"]}
						className="grid grid-cols-3"
						color="danger"
					>
						<Tab.Item
							keyCurrent="hola1"
							className="gap-x-2"
							onClick={() => handleChangeTab1("hola1")}
						>
							<FaUser className="w-3 h-3" /> Hola 1
						</Tab.Item>
						<TabItem
							keyCurrent="hola2"
							onClick={() => handleChangeTab1("hola2")}
						>
							Hola 2
						</TabItem>
						<TabItem
							keyCurrent="hola3"
							onClick={() => handleChangeTab1("hola3")}
						>
							Hola 3
						</TabItem>
					</Tab>
				</div>

				<div className="border mt-2 w-[500px] p-4">
					<Tab
						data={data}
						activeKey={tab2}
						color="danger"
						disabledKeys={["item1"]}
						className="overflow-x-auto flex items-center"
						variant="underline"
					>
						{({ item }) => (
							<Tab.Item
								keyCurrent={item.id}
								onClick={() => handleChangeTab2(item.id)}
								className="w-[100px]"
							>
								{item.name}
							</Tab.Item>
						)}
					</Tab>
				</div>
			</>
		);
	},
};
