import clsx from "clsx";
import { MdOutlineClose } from "react-icons/md";
import { IconCloseProps } from "../interface/calendar.interface";

export const IconCloseCalendar = ({
	disabled,
	error,
	onClick,
}: IconCloseProps) => {
	return (
		<MdOutlineClose
			className={clsx("w-5 h-5", {
				"fill-text-700": disabled,
				"fill-text-800": !disabled && !error,
				"fill-danger-700": error && !disabled,
			})}
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
		/>
	);
};
