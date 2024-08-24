import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ItemRight } from "./item-right";
import { SlideOverProps } from "./interface/slide-over.interface";

export const SliderOver = ({
	children,
	show,
	isOverLay = false,
	classNameOverLay,
	position = "right",
	className,
	classNameContainer,
	classNamePosition,
	onCloseOut,
	interaction = true,
}: SlideOverProps) => {
	const root = document.getElementById("root");
	useEffect(() => {
		const intervale = setTimeout(() => {
			if (interaction && show) {
				if (root) {
					root.removeAttribute("inert");
					root.removeAttribute("aria-hidden");
				}
			}
			const html = document.getElementsByTagName("html")[0];

			html.style.paddingRight = "";
		}, 100);

		return () => {
			clearTimeout(intervale);
		};
	}, [interaction, root, show]);

	const childrenRender = () => {
		if (position === "right")
			return (
				<ItemRight
					className={className}
					classNamePosition={classNamePosition}
				>
					{children}
				</ItemRight>
			);
		else if (position === "left") return null;

		return null;
	};

	const handleCloseModal = () => {
		if (onCloseOut) return onCloseOut();
		return undefined;
	};

	return (
		<Transition appear show={show} as={Fragment}>
			<Dialog
				as="div"
				className={twMerge(`relative`, classNameContainer)}
				onClose={handleCloseModal}
			>
				{isOverLay ? (
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

				{childrenRender()}
			</Dialog>
		</Transition>
	);
};
