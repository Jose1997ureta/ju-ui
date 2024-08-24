import { twMerge } from "tailwind-merge";
import {
	ModalHeaderProps,
	OptionModalHeaderProps,
} from "../interface/modal.interface";
import { ButtonIcon } from "@/components/button";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";

const initialValues: OptionModalHeaderProps = {
	classText: "",
	classContainerText: "",
};

export const ModalHeader = ({
	className,
	children,
	title,
	isClose = true,
	onClose,
	option = initialValues,
}: ModalHeaderProps) => {
	return (
		<div className={twMerge("p-4", className)}>
			{children || (
				<div
					className={twMerge(
						clsx({
							"flex justify-between gap-x-2 items-center": isClose,
						}),
						option.classContainerText
					)}
				>
					<p
						className={twMerge(
							"text-base text-secondary-700 font-medium",
							option.classText
						)}
					>
						{title}
					</p>

					{isClose ? (
						<ButtonIcon onClick={() => onClose && onClose()} size="md">
							<IoCloseSharp />
						</ButtonIcon>
					) : null}
				</div>
			)}
		</div>
	);
};
