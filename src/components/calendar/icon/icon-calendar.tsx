import clsx from "clsx";
import { FaCalendar } from "react-icons/fa";
import { IconCalendarProps } from "../interface/calendar.interface";

export const IconCalendar = ({ disabled, error }: IconCalendarProps) => {
	return (
		<FaCalendar
			className={clsx({
				"fill-text-700": disabled,
				"fill-text-800": !disabled && !error,
				"fill-danger-700": error && !disabled,
			})}
		/>
	);
};
