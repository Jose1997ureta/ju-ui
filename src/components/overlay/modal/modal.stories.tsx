import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal";
import { Button } from "../../button/button";

import { Select } from "@/components/form";
import { useModal } from "./hook/use-modal";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

// export const Hidden: Story = {
// 	args: {},

// 	render: function Render() {
// 		const [show, setShow] = useState<boolean>(false);
// 		const [hidden, setHidden] = useState<boolean>(false);
// 		return (
// 			<>
// 				<Button
// 					onClick={() => {
// 						setShow(true);
// 						setHidden(false);
// 					}}
// 				>
// 					Abrir
// 				</Button>
// 				<Button onClick={() => setHidden(false)}>Mostrar</Button>

// 				<Modal show={show} hidden={hidden} isOverLay={false}>
// 					<div className="bg-secondary-500">
// 						<Button onClick={() => setShow(false)}>Cerrar</Button>
// 						<Button onClick={() => setHidden(true)}>Ocultar</Button>
// 					</div>
// 				</Modal>
// 			</>
// 		);
// 	},
// };

export const ModaInModal: Story = {
	args: {},

	render: function Render() {
		const modal1 = useModal();
		const modal2 = useModal();

		return (
			<>
				<Button onClick={() => modal1.showModal()}>Abrir Modal 1</Button>

				{/* {show ? ( */}
				<Modal
					show={modal1.modal.show}
					hidden={modal1.modal.hidden}
					className="w-1/2"
				>
					<Modal.Header title="Activar Ciudad" />
					<Modal.Body>
						<Button onClick={() => modal1.closeModal()}>
							Cerrar Modal 1
						</Button>
						<Button
							onClick={() => {
								modal1.updateModal({ hidden: true });
								modal2.showModal();
							}}
						>
							Abrir Modal 2
						</Button>

						<Select data={[]} onChange={() => alert()} isPortal />

						{/* {show1 ? ( */}
						<Modal show={modal2.modal.show}>
							<div className="bg-secondary-500">
								<Button
									onClick={() => {
										modal2.closeModal();
										modal1.updateModal({ hidden: false });
									}}
								>
									Cerrar Modal 2
								</Button>
								<Button
									onClick={() => {
										modal1.closeModal();
									}}
								>
									Cerrar Modal 1
								</Button>
							</div>
						</Modal>
					</Modal.Body>
					<Modal.Footer>gola</Modal.Footer>
					{/* ) : null} */}
				</Modal>
				{/* ) : null} */}

				{/* <Modal show={show} hidden={hidden}>
					<div className="bg-secondary-500">
						<Button onClick={() => setShow(false)}>Cerrar Modal 1</Button>
						<Button
							onClick={() => {
								setHidden(true);
								setShow1(true);
							}}
						>
							Abrir Modal 2
						</Button>

						<Modal show={show1}>
							<div className="bg-secondary-500">
								<Button
									onClick={() => {
										setShow1(false);
										setHidden(false);
									}}
								>
									Cerrar Modal 2
								</Button>
								<Button
									onClick={() => {
										setShow(false);
									}}
								>
									Cerrar Modal 1
								</Button>
							</div>
						</Modal>
					</div>
				</Modal> */}
			</>
		);
	},
};
