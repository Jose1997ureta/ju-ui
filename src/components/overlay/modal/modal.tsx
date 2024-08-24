import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import ReactDOM from "react-dom";
// import { ModalContent } from "./modal-content";
import { ModalProps } from "./interface/modal.interface";
import { ModalBody } from "./components/modal-body";
import { ModalHeader } from "./components/modal-header";
import { ModalFooter } from "./components/modal-footer";

export const Modal = ({
	children,
	show,
	isOverLay = true,
	classNameOverLay,

	className,
	classNameContainer,
	hidden = false,
	onCloseOut,
}: ModalProps) => {
	// const root = document.getElementById("root");
	const root = document.getElementById("storybook-root");

	useEffect(() => {
		if (show) {
			const html = document.getElementsByTagName("html")[0];
			html.style.paddingRight = "";
		}
	}, [show]);

	const handleCloseModal = () => {
		if (onCloseOut) return onCloseOut();
		return undefined;
	};

	return (
		root &&
		ReactDOM.createPortal(
			<Transition.Root appear show={show} as={Fragment}>
				<Dialog
					as="div"
					className={twMerge(
						`relative ${hidden ? "invisible" : "visible"}`,
						classNameContainer
					)}
					open={show}
					onClose={handleCloseModal}
				>
					{isOverLay && !hidden ? (
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div
								className={twMerge(
									"fixed inset-0 transition-opacity bg-black/50",
									classNameOverLay
								)}
							/>
						</Transition.Child>
					) : null}

					<div className="fixed inset-0 overflow-y-auto w-screen">
						<div className={"flex min-h-full items-center justify-center"}>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel
									className={twMerge(
										"transform overflow-hidden transition-all bg-white rounded-md",
										className
									)}
								>
									{children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
					{/* <ModalContent className={className}>{children}</ModalContent> */}
				</Dialog>
			</Transition.Root>,
			root
		)
	);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
