import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { ItemRightProps } from "./interface/slide-over.interface";

export const ItemRight = ({
	children,
	className,
	classNamePosition,
}: ItemRightProps) => {
	return (
		<div className="fixed inset-0 overflow-hidden">
			<div className="absolute inset-0 overflow-hidden">
				<div
					className={twMerge(
						"pointer-events-none fixed inset-y-0 right-0 flex max-w-full",
						classNamePosition
					)}
				>
					<Transition.Child
						as={Fragment}
						enter="transform transition ease-in-out duration-500 sm:duration-700"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-500 sm:duration-700"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<Dialog.Panel
							className={twMerge(
								"pointer-events-auto relative max-w-md",
								className
							)}
						>
							{children}
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</div>
		</div>
	);
};
