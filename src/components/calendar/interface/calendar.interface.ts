import { ColorProps, ExcludeType, SizeProps } from "@/interfaces";
import { ValueCalendar } from "./calendar-share.interface";

export interface CalendarProps {
	value: ValueCalendar;
	onChange: (value: ValueCalendar) => void;
	showDoubleView?: boolean;
	className?: string;
	// classNameContainer?: string;
	color?: ExcludeType<ColorProps, "success" | "danger" | "warning">;
	minDate?: Date;
	maxDate?: Date;
	showCalendar?: boolean;
	onCloseCalendar?: () => void;
	onClearCalendar?: () => void;
	onOpenCalendar?: () => void;
	loading?: boolean;
	widthCalendar?: number;
	disabled?: boolean;
	error?: string;
	tileDisabled?: ({ date }: { date: Date }) => boolean;
	locale?: "es" | "en";
	format?: "MM/dd/yyyy" | "dd/MM/yyyy";
	type?: "date-picker" | "date-range-picker";
	onInvalidChange?: () => void;
	size?: ExcludeType<SizeProps, "xs">;
	onKeyUp?: (event: any) => void;
	onKeyDown?: (event: any) => void;
}

export interface IconCalendarProps {
	disabled?: boolean;
	error?: string;
}
export interface IconCloseProps extends IconCalendarProps {
	onClick: () => void;
}

export interface TimePickerProps {
	value: ValueCalendar;
	onChange: (value: ValueCalendar) => void;
	onClearTime?: () => void;
	className?: string;
	// classNameContainer?: string;
	minTime?: string;
	maxTime?: string;
	disabled?: boolean;
	error?: string;
	format?:
		| "hh:mm"
		| "hh:mm a"
		| "HH:mm"
		| "hh:mm:ss"
		| "hh:mm:ss a"
		| "HH:mm:ss";
	onInvalidChange?: () => void;
	isIcon?: boolean;
	isIconClear?: boolean;
	size?: ExcludeType<SizeProps, "xs">;
	onKeyUp?: (event: any) => void;
	onKeyDown?: (event: any) => void;
}
