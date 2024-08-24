import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";

import CalendarComponent from "react-calendar";
import DatePicker from "react-date-picker";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import { useEffect, useRef, useState } from "react";
import { PopOver } from "../../popover/popover";

import { twMerge } from "tailwind-merge";
import { CalendarSyle } from "./calendar.style";

import { v4 as uuidv4 } from "uuid";
import { LabelErrorForm } from "../../form";

import { IconCalendar } from "../icon/icon-calendar";
import { IconCloseCalendar } from "../icon/icon-close-calendar";
import { Loading } from "@/components/loading/loading";
import { CalendarProps } from "../interface/calendar.interface";
import { ValueCalendar } from "../interface/calendar-share.interface";

export const CalendarPicker = ({
	value,
	showDoubleView,
	className,
	color = "secondary",
	minDate,
	maxDate,
	showCalendar = false,
	loading,
	widthCalendar,
	locale = "es",
	format = "MM/dd/yyyy",
	disabled,
	error,
	onChange,
	onCloseCalendar,
	onOpenCalendar,
	tileDisabled,
	onClearCalendar,
	onInvalidChange,
	onKeyDown,
	onKeyUp,
	type = "date-picker",
	size = "md",
}: CalendarProps) => {
	const [show, setShow] = useState<boolean>(showCalendar);
	const inputRef = useRef<number>(0);
	const uui = uuidv4();

	useEffect(() => {
		const element = document.getElementById(uui);

		if (element) {
			if (widthCalendar) inputRef.current = widthCalendar;
			else {
				if (showDoubleView) inputRef.current = 550;
				else inputRef.current = element.clientWidth;
			}
		}
	}, [showDoubleView, uui, widthCalendar]);

	const handleChange = (value: ValueCalendar) => {
		onChange(value);
	};

	const handleCloseCalendar = () => {
		if (disabled) return;

		setShow(false);
		onCloseCalendar && onCloseCalendar();
	};

	const handleOpenCalendar = () => {
		if (disabled) return;

		const status = !show;
		setShow(status);

		if (status) onOpenCalendar && onOpenCalendar();
		else onCloseCalendar && onCloseCalendar();
	};

	const handleClearCalendar = () => {
		if (disabled) return;

		if (onClearCalendar) return onClearCalendar();

		onChange(null);
	};

	return (
		<PopOver
			isShow={show}
			content={
				<CalendarSyle
					color={color}
					showcalendar={show.toString()}
					widthcalendar={inputRef.current}
				>
					{loading ? <Loading size="sm" color="secondary" /> : null}
					<CalendarComponent
						value={value}
						onChange={handleChange}
						locale={locale}
						showDoubleView={showDoubleView}
						calendarType="gregory"
						minDate={minDate}
						maxDate={maxDate}
						tileDisabled={tileDisabled}
						selectRange={type === "date-range-picker"}
					/>
				</CalendarSyle>
			}
			positions={["bottom", "top"]}
			reposition
			isArrow={false}
			onClickOutside={handleCloseCalendar}
			tooltipClassName="relative"
		>
			<CalendarSyle
				color={color}
				className={twMerge(className)}
				onClick={handleOpenCalendar}
				showcalendar={show.toString()}
				id={uui}
				widthcalendar={inputRef.current}
				error={error}
				size={size}
			>
				{type === "date-picker" ? (
					<DatePicker
						value={value}
						onChange={onChange}
						calendarIcon={
							<IconCalendar disabled={disabled} error={error} />
						}
						shouldOpenCalendar={() => false}
						className="w-full"
						format={format}
						locale={locale}
						showLeadingZeros
						clearIcon={
							<IconCloseCalendar
								disabled={disabled}
								error={error}
								onClick={handleClearCalendar}
							/>
						}
						minDate={minDate}
						maxDate={maxDate}
						name="date"
						disabled={disabled}
						onInvalidChange={onInvalidChange}
						isOpen={false}
						onKeyDown={onKeyDown}
						onKeyUp={onKeyUp}
					/>
				) : (
					<DateRangePicker
						value={value}
						onChange={onChange}
						calendarIcon={
							<IconCalendar disabled={disabled} error={error} />
						}
						shouldOpenCalendar={() => false}
						className={twMerge("w-full", className)}
						format={format}
						locale={locale}
						showLeadingZeros
						clearIcon={
							<IconCloseCalendar
								disabled={disabled}
								error={error}
								onClick={handleClearCalendar}
							/>
						}
						minDate={minDate}
						maxDate={maxDate}
						name="date"
						disabled={disabled}
						onInvalidChange={onInvalidChange}
						isOpen={false}
						onKeyDown={onKeyDown}
						onKeyUp={onKeyUp}
					/>
				)}

				{!disabled && error ? <LabelErrorForm text={error} /> : null}
			</CalendarSyle>
		</PopOver>
	);
};
