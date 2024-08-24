import "react-time-picker/dist/TimePicker.css";

import Time from "react-time-picker";

import { TimeStyle } from "./time.style";
import { twMerge } from "tailwind-merge";
import { IconCloseCalendar } from "../icon/icon-close-calendar";
import { IconTimeCalendar } from "../icon/icon-time-calendar";
import { LabelErrorForm } from "@/components/form";
import { TimePickerProps } from "../interface/calendar.interface";

export const TimePicker = ({
	value,
	className,
	disabled,
	error,
	format = "HH:mm",
	maxTime,
	minTime,
	isIcon = true,
	isIconClear = true,
	size = "md",
	onChange,
	onClearTime,
	onInvalidChange,
	onKeyDown,
	onKeyUp,
}: TimePickerProps) => {
	const handleClearTime = () => {
		if (disabled) return;

		if (onClearTime) return onClearTime();

		onChange(null);
	};

	return (
		<TimeStyle className={twMerge(className)} error={error} size={size}>
			<Time
				onChange={onChange}
				value={value}
				shouldOpenClock={() => false}
				clearIcon={
					isIconClear ? (
						<IconCloseCalendar
							disabled={disabled}
							error={error}
							onClick={handleClearTime}
						/>
					) : null
				}
				clockIcon={
					isIcon ? (
						<IconTimeCalendar disabled={disabled} error={error} />
					) : null
				}
				disabled={disabled}
				className={"w-full"}
				format={format}
				minTime={minTime}
				maxTime={maxTime}
				onInvalidChange={onInvalidChange}
				isOpen={false}
				onKeyDown={onKeyDown}
				onKeyUp={onKeyUp}
			/>

			{!disabled && error ? <LabelErrorForm text={error} /> : null}
		</TimeStyle>
	);
};
