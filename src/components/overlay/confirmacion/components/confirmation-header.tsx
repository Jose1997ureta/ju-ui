import { ButtonIcon } from "@/components/button/button-icon";

import { IoCloseSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { ConfirmartionHeaderProps } from "../interface/confirmation.interface";

export const ConfirmartionHeader = ({
	title,
	children,
	className,
	isClose = true,
	onClose,
	icon,
}: ConfirmartionHeaderProps) => {
	const handleClose = () => {
		onClose && onClose();
	};

	return (
		<div className={twMerge("p-4 relative sm:!pb-3", className)}>
			{children || (
				<div className="sm:!flex sm:!tems-center sm:!justify-between sm:!gap-x-2">
					<div className="flex flex-col items-center sm:!flex-row sm:!gap-x-3 flex-1">
						{icon}
						<p className="text-lg mt-3 sm:!mt-0 font-medium text-center sm:!text-left !leading-5 text-text-900 flex-1">
							{title}
						</p>
					</div>

					{isClose ? (
						<ButtonIcon
							onClick={handleClose}
							size="md"
							className="!absolute sm:!relative right-3 top-3 sm:!right-auto sm:!top-auto"
						>
							<IoCloseSharp />
						</ButtonIcon>
					) : null}
				</div>
			)}
		</div>
	);
};
