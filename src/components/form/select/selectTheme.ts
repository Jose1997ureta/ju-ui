import clsx from "clsx";
import { StylesConfig } from "react-select";
import { SelectStyleProps } from "./interface/select.interface";

export const fcSelectStyles = ({
	color,
	widthMenu,
	error,
	touched,
	size,
}: SelectStyleProps) => {
	const optionHover = clsx(
		color === "primary" && "var(--colors-primary-100)",
		color === "secondary" && "var(--colors-secondary-100)",
		color === "neutral" && "var(--colors-neutral-100)",
		color === "success" && "var(--colors-success-100)",
		color === "warning" && "var(--colors-warning-100)",
		color === "danger" && "var(--colors-danger-100)"
	);

	const optionColor = clsx(
		color === "primary" && "var(--colors-primary-700)",
		color === "secondary" && "var(--colors-secondary-700)",
		color === "neutral" && "var(--colors-neutral-700)",
		color === "success" && "var(--colors-success-700)",
		color === "warning" && "var(--colors-warning-700)",
		color === "danger" && "var(--colors-danger-700)"
	);

	const colorStyles: StylesConfig<any> = {
		option: (styles, { isFocused, isSelected, isMulti }) => {
			return {
				...styles,
				backgroundColor:
					isFocused || isSelected ? optionHover : "var(--colors-white)",
				borderRadius: isFocused || isSelected ? "4px" : "0px",
				color: "var(--colors-text-800)",
				cursor: "pointer",
				padding: "8px",
				borderBottom:
					(isFocused || isSelected) && isMulti
						? "1px solid var(--colors-white)"
						: "",
				":active": {
					backgroundColor: "var(--colors-white)",
				},
			};
		},
		dropdownIndicator: (styles, { isDisabled }) => {
			return {
				...styles,
				color:
					!isDisabled && error && touched
						? "var(--colors-danger-700)"
						: isDisabled
							? "var(--colors-text-700)"
							: "var(--colors-text-800)",
			};
		},
		indicatorSeparator: (styles) => {
			return {
				...styles,
				display: "none",
			};
		},
		clearIndicator: (styles) => {
			return {
				...styles,
				paddingRight: "0px",
			};
		},
		menu: (styles) => {
			return {
				...styles,
				boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.16)",
				marginTop: "4px",
				padding: "8px",
				width: widthMenu,
				zIndex: 10,
			};
		},
		valueContainer: (styles, { isMulti }) => {
			return {
				...styles,
				paddingLeft: "4px",
				paddingRight: "4px",
				maxHeight: isMulti ? "64px" : "",
				overflowY: isMulti ? "auto" : "inherit",
			};
		},
		placeholder: (styles, { isDisabled }) => {
			let sizeCustom = 12;

			if (size === "md") sizeCustom = 14;
			else if (size === "lg") sizeCustom = 14;

			return {
				...styles,
				fontSize: sizeCustom,
				color:
					!isDisabled && error && touched
						? "var(--colors-danger-700)"
						: isDisabled
							? "var(--colors-text-700)"
							: "var(--colors-text-700)",
			};
		},
		multiValue: (styles) => {
			return {
				...styles,
				borderRadius: "4px",
				backgroundColor: optionColor,
				color: "var(--colors-white)",
			};
		},
		multiValueLabel: (styles) => {
			return {
				...styles,
				color: "var(--colors-white)",
			};
		},
		multiValueRemove: (styles) => {
			return {
				...styles,

				":hover": {
					backgroundColor: "inherit",
				},
			};
		},
		singleValue: (styles) => {
			let sizeCustom = 12;

			if (size === "md") sizeCustom = 14;
			else if (size === "lg") sizeCustom = 14;

			return {
				...styles,
				fontSize: sizeCustom,
			};
		},
		control: (styles, { isDisabled }) => {
			let sizeCustom = 30;

			if (size === "md") sizeCustom = 34;
			else if (size === "lg") sizeCustom = 38;

			return {
				...styles,
				minHeight: sizeCustom,
				border: `1px solid ${
					!isDisabled && error && touched
						? "var(--colors-danger-700)"
						: "var(--colors-text-700)"
				}`,
				borderRadius: "6px",
				cursor: isDisabled ? "not-allowed" : "pointer",
				color: isDisabled
					? "var(--colors-text-700)"
					: !isDisabled && error && touched
						? "var(--colors-danger-700)"
						: "",
				boxShadow: "inherit",

				":focus-within,:hover,:active": {
					border: `1px solid ${
						!isDisabled && error && touched
							? "var(--colors-danger-700)"
							: "var(--colors-primary-700)"
					}`,

					boxShadow:
						!isDisabled && error && touched
							? "var(--shadow-inputError)"
							: "var(--shadow-inputBase)",
				},
			};
		},
	};

	return colorStyles;
};
