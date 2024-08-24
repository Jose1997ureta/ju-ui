import { Meta, StoryObj } from "@storybook/react";
import { Button, FormItem, PopOver } from "..";
import { useState } from "react";

const meta: Meta<typeof PopOver> = {
	title: "Components/PopOver/Custom",
	component: PopOver,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PopOver>;

export const Click: Story = {
	args: {},

	render: function Render() {
		const [isShow, setIsShow] = useState<boolean>(false);

		return (
			<PopOver
				tooltipClassName="w-80 p-2"
				onClickOutside={() => setIsShow(false)}
				isShow={isShow}
				content={
					<div>
						<p className="text-sm mb-2">Formulario de resgistro</p>

						<div>
							<FormItem className="mb-2">
								<FormItem.Label label="Email" />
								<FormItem.Input value="" type="email" />
							</FormItem>
							<FormItem className="mb-2">
								<FormItem.Label label="Password" />
								<FormItem.Input value="" type="password" />
							</FormItem>
							<FormItem className="mb-3">
								<FormItem.Label label="Usuario" />
								<FormItem.Select
									data={[]}
									onChange={() => console.log()}
								/>
							</FormItem>
							<Button className="w-full justify-center">Ingresar</Button>
						</div>
					</div>
				}
			>
				<Button color="neutral" onClick={() => setIsShow(true)}>
					Abrir
				</Button>
			</PopOver>
		);
	},
};
