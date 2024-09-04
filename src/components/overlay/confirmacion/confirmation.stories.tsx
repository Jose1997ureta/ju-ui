import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../button/button";
import { useState } from "react";

import { Confirmation } from "./confirmation";
import { IoWarningOutline } from "react-icons/io5";
import { ButtonIcon } from "@/components/button/button-icon";

const meta: Meta<typeof Confirmation> = {
	title: "Components/Confirmation",
	component: Confirmation,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Confirmation>;

export const Default: Story = {
	args: {},

	render: function Render() {
		const [show, setShow] = useState<boolean>(false);

		return (
			<>
				<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>

				<Confirmation show={show}>
					<Confirmation.Header
						title="¿Está seguro que desea cerrar sesión de todos los usuarios seleccionados?"
						icon={
							<ButtonIcon
								className="w-12 h-12 sm:w-10 sm:h-10 text-2xl"
								color="danger"
							>
								<IoWarningOutline />
							</ButtonIcon>
						}
						onClose={() => setShow(false)}
					/>
					<Confirmation.Body
						text="Al confirmar se cerrarán las sesiones de todos los usuarios seleccionados"
						// isClose={false}
						// isIcon={false}
					/>

					<Confirmation.Footer
						options={{
							accept: {
								text: "Confirmar",
								color: "danger",
							},
							cancel: {
								onCancel: () => setShow(false),
							},
						}}
					/>
				</Confirmation>
			</>
		);
	},
};
