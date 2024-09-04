import ReactDOM from "react-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import { ConfirmartionHeader } from "./components/confirmation-header";
import { ConfirmationBody } from "./components/confirmation-body";
import { ConfirmationFooter } from "./components/confirmation-footer";
import { ConfirmationProps } from "./interface/confirmation.interface";

export const Confirmation = ({
	children,
	show,
	classNameOverLay,
	className,
	classNameContainer,
}: ConfirmationProps) => {
	const root = document.getElementById("root");
	// const root = document.getElementById("storybook-root");

	return (
		root &&
		ReactDOM.createPortal(
			<Transition.Root appear show={show} as={Fragment}>
				<Dialog
					as="div"
					className={twMerge(`relative`, classNameContainer)}
					open={show}
					onClose={() => undefined}
				>
					{/* OVERLAY */}
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

					{/* Modal Content */}

					<div className="fixed inset-0 overflow-y-auto w-screen">
						<div className="flex min-h-full items-center justify-center">
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
										"transform overflow-hidden transition-all rounded bg-white w-11/12 sm:!w-[500px]",
										className
									)}
								>
									{children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>,
			root
		)
	);
};

Confirmation.Header = ConfirmartionHeader;
Confirmation.Body = ConfirmationBody;
Confirmation.Footer = ConfirmationFooter;
