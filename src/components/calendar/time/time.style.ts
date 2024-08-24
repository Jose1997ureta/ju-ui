import { ExcludeType, SizeProps } from "@/interfaces";
import styled, { css } from "styled-components";

export const TimeStyle = styled.div<{
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
	.react-time-picker--disabled .react-time-picker__wrapper {
		border: 1px solid var(--colors-text-700);
		box-shadow: inherit !important;
		background-color: var(--colors-neutral-200);
	}

	.react-time-picker__inputGroup__input,
	.react-time-picker__inputGroup__input::placeholder,
	.react-time-picker__inputGroup__divider,
	.react-time-picker__inputGroup__leadingZero {
		font-size: 14px;
		color: ${({ error }) =>
			error ? "var(--colors-danger-700)" : "var(--colors-text-800)"};
		outline: none;
		border: 0px;
	}

	.react-time-picker__inputGroup__input:invalid {
		color: var(--colors-danger-700);
	}

	.react-time-picker__wrapper {
		padding-right: 8px;
		padding-left: 8px;
		border: 1px solid var(--colors-text-700);
		border-radius: 6px;

		display: flex;
		flex-grow: 1;
		flex-shrink: 0;

		${({ error }) => {
			if (error) {
				return css`
					box-shadow: var(--shadow-inputError);
					border-color: var(--colors-danger-700);
				`;
			} else {
				return css`
					&:focus-within {
						box-shadow: var(--shadow-inputBase);
						border-color: var(--colors-primary-700);
					}
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

	.react-time-picker__button {
		padding: 0;
	}

	.react-time-picker__inputGroup {
		padding: 0;
		order: 2;

		box-sizing: content-box;
		flex-grow: 1;
		min-width: 2.813em;
	}

	.react-time-picker__clock-button {
		order: 1;
		margin-right: 8px;
	}

	.react-time-picker__clear-button {
		order: 3;
	}

	.react-time-picker--disabled .react-time-picker__inputGroup__input,
	.react-time-picker--disabled .react-time-picker__inputGroup__divider,
	.react-time-picker--disabled .react-time-picker__inputGroup__leadingZero {
		color: var(--colors-text-700);
	}

	.react-time-picker__inputGroup__amPm {
		cursor: pointer;
	}

	.react-time-picker__inputGroup__amPm option {
		color: var(--colors-text-800);
	}

	/* ============ RANGE ============= */
`;
