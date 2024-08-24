import clsx from "clsx";
import { FaClock } from "react-icons/fa";
import { IconCalendarProps } from "../interface/calendar.interface";

export const IconTimeCalendar = ({ disabled, error }: IconCalendarProps) => {
	return (
		<FaClock
			className={clsx("w-5 h-5", {
				"fill-text-700": disabled,
				"fill-text-800": !disabled && !error,
				"fill-danger-700": error && !disabled,
			})}
		/>
	);
};
