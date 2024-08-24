import styled, { css } from "styled-components";
import { ColorProps, ExcludeType, SizeProps } from "../..";

export const CalendarSyle = styled.div<{
	color: ExcludeType<ColorProps, "success" | "danger" | "warning">;
	showcalendar: string;
	widthcalendar: number;
	error?: string;
	size?: ExcludeType<SizeProps, "xs">;
}>`
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="number"] {
		-moz-appearance: none;
	}

	/* .react-date-picker--disabled {
		background-color: unset;
	} */
	.react-date-picker--disabled .react-date-picker__wrapper,
	.react-daterange-picker--disabled .react-daterange-picker__wrapper {
		border: 1px solid var(--colors-text-700);
		box-shadow: inherit !important;
		background-color: var(--colors-neutral-200);
	}

	.react-date-picker__inputGroup__input,
	.react-date-picker__inputGroup__divider,
	.react-date-picker__inputGroup__leadingZero,
	.react-daterange-picker__inputGroup__input,
	.react-daterange-picker__inputGroup__divider,
	.react-daterange-picker__inputGroup__leadingZero,
	.react-daterange-picker__range-divider {
		font-size: 14px;
		color: ${({ error }) =>
			error ? "var(--colors-danger-700)" : "var(--colors-text-800)"};
		outline: none;
		border: 0px;
	}

	.react-date-picker__inputGroup__input:invalid,
	.react-daterange-picker__inputGroup__input:invalid {
		color: var(--colors-danger-700);
	}

	.react-date-picker__wrapper,
	.react-daterange-picker__wrapper {
		padding-right: 8px;
		padding-left: 8px;
		border: 1px solid var(--colors-text-700);
		border-radius: 6px;

		display: flex;
		flex-grow: 1;
		flex-shrink: 0;

		${({ showcalendar, error }) => {
			if (error) {
				return css`
					box-shadow: var(--shadow-inputError);
					border-color: var(--colors-danger-700);
				`;
			} else if (showcalendar === "true") {
				return css`
					box-shadow: var(--shadow-inputBase);
					border-color: var(--colors-primary-700);
				`;
			}
		}}
		${({ size }) => {
			if (size === "sm")
				return css`
					padding-top: 2px;
					padding-bottom: 2px;
				`;
			else if (size === "md")
				return css`
					padding-top: 4px;
					padding-bottom: 4px;
				`;
			else if (size === "lg")
				return css`
					padding-top: 6px;
					padding-bottom: 6px;
				`;
		}}
	}

	/* ============== DATE ============== */

	.react-date-picker__button {
		padding: 0;
	}

	.react-date-picker__inputGroup {
		padding: 0;
		order: 2;

		box-sizing: content-box;
		flex-grow: 1;
		min-width: calc(12px + 3.674em);
	}

	.react-date-picker__calendar-button {
		order: 1;
		margin-right: 8px;
	}

	.react-date-picker__clear-button {
		order: 3;
	}

	.react-date-picker--disabled .react-date-picker__inputGroup__input,
	.react-date-picker--disabled .react-date-picker__inputGroup__divider,
	.react-date-picker--disabled .react-date-picker__inputGroup__leadingZero {
		color: var(--colors-text-700);
	}

	/* ============ RANGE ============= */

	.react-daterange-picker__button {
		padding: 0;
	}

	.react-daterange-picker__wrapper
		.react-daterange-picker__inputGroup:first-child {
		order: 2;
	}
	.react-daterange-picker__range-divider {
		order: 3;
	}
	.react-daterange-picker__wrapper
		.react-daterange-picker__inputGroup:nth-child(3) {
		order: 4;
	}
	.react-daterange-picker__clear-button {
		order: 5;
	}

	.react-daterange-picker__calendar-button {
		order: 1;
		margin-right: 8px;
	}

	.react-daterange-picker--disabled .react-daterange-picker__inputGroup__input,
	.react-daterange-picker--disabled .react-date-picker__inputGroup__divider,
	.react-daterange-picker--disabled
		.react-daterange-picker__inputGroup__leadingZero,
	.react-daterange-picker--disabled .react-daterange-picker__range-divider {
		color: var(--colors-text-700);
	}

	/* =========== RANGE ============== */

	/* .react-date-picker__calendar {
		max-width: 100vw;
		width: auto;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 10px;
	} */

	/*  =========================== estilos para react-calendar ================== */
	.react-calendar {
		width: ${({ widthcalendar }) => `${widthcalendar}px`};
		font-family: "Rubik";
		border: none;
		padding: 12px;
	}

	.react-calendar--doubleView {
		width: ${({ widthcalendar }) => `${widthcalendar}px`};
	}

	.react-calendar__navigation {
		height: 44px;
		margin-bottom: 6px;
	}
	.react-calendar__navigation__prev2-button,
	.react-calendar__navigation__next2-button {
		display: none;
	}

	.react-calendar__navigation__next-button,
	.react-calendar__navigation__prev-button {
		font-size: 22px;
		color: var(--colors-text-800);
	}

	.react-calendar__navigation__label span {
		text-transform: capitalize;
		color: var(--color-text-900);
		font-size: 14px;
	}

	.react-calendar__navigation button:disabled {
		background-color: var(--colors-neutral-100);
	}

	.react-calendar__navigation button:enabled:hover,
	.react-calendar__navigation button:enabled:focus {
		background-color: var(--colors-neutral-200);
	}

	.react-calendar__month-view__weekdays__weekday {
		text-transform: capitalize;
		font-weight: 500;
		color: var(--color-text-900);
	}
	.react-calendar__month-view__weekdays__weekday abbr {
		text-decoration: none;
	}

	.react-calendar__month-view__weekNumbers .react-calendar__tile {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75em;
		font-weight: bold;
	}
	.react-calendar__month-view__days__day--weekend {
		color: var(--colors-danger-700);
	}
	.react-calendar__month-view__days__day--neighboringMonth {
		color: var(--colors-neutral-300);
	}
	.react-calendar__year-view .react-calendar__tile,
	.react-calendar__decade-view .react-calendar__tile,
	.react-calendar__century-view .react-calendar__tile {
		padding: 2em 0.5em;
	}
	.react-calendar__tile {
		font-size: 14px;
		line-height: 16px;
	}

	.react-calendar__tile:disabled {
		text-decoration: line-through;
		color: var(--colors-neutral-300);
		background-color: inherit;
	}

	${({ color }) => {
		switch (color) {
			case "primary":
				return css`
					.react-calendar__tile:enabled:hover,
					.react-calendar__tile:enabled:focus {
						background-color: var(--colors-primary-700);
					}

					.react-calendar__tile--active {
						background: var(--colors-primary-700) !important;
						color: white !important;
						border-radius: 0px !important;
					}
				`;

			case "secondary":
				return css`
					.react-calendar__tile:enabled:hover,
					.react-calendar__tile:enabled:focus {
						background-color: var(--colors-secondary-700);
					}

					.react-calendar__tile--active {
						background: var(--colors-secondary-700) !important;
						color: white !important;
						border-radius: 0px !important;
					}
				`;

			default:
				return css`
					.react-calendar__tile:enabled:hover,
					.react-calendar__tile:enabled:focus {
						background-color: var(--colors-neutral-700);
					}

					.react-calendar__tile--active {
						background: var(--colors-neutral-700) !important;
						color: white !important;
						border-radius: 0px !important;
					}
				`;
		}
	}}

	.react-calendar__tile:enabled:hover,
	.react-calendar__tile:enabled:focus {
		color: white;
		border-radius: 0px;
	}

	.react-calendar__tile--now {
		border-radius: 0px !important;
		background-color: var(--colors-neutral-200);
	}

	.react-calendar--selectRange .react-calendar__tile--hover {
		background-color: var(--colors-neutral-200);
	}

	.react-calendar__tile--active.react-calendar__month-view__days__day--neighboringMonth {
		background-color: var(--colors-neutral-200) !important;
		color: var(--colors-text-700) !important;
	}

	/* RANGE */
`;
