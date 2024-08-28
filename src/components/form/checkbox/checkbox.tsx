import { cn } from "@/functions";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { LabelErrorForm } from "..";
import { CheckboxComponentProps } from "./interface/checkbox.interface";

const CheckboxClassProps = cva(
	[
		"relative peer shrink-0 appearance-none border-2 rounded-sm bg-white checked:border-0 focus:outline-none cursor-pointer",
	],
	{
		variants: {
			color: {
				primary: "checked:bg-primary-700 border-primary-700",
				secondary: "checked:bg-secondary-700 border-secondary-700",
				neutral: "checked:bg-neutral-700 border-neutral-700",
				success: "checked:bg-success-700 border-success-700",
				danger: "checked:bg-danger-700 border-danger-700",
				warning: "checked:bg-warning-700 border-warning-700",
			},
			size: {
				sm: "w-4 h-4",
				md: "w-[18px] h-[18px]",
				lg: "w-5 h-5",
			},
		},
		defaultVariants: {
			color: "secondary",
			size: "md",
		},
	}
);

type CheckboxProps = VariantProps<typeof CheckboxClassProps> &
	CheckboxComponentProps;

export const CheckBox = ({
	id = "checkbox",
	label,
	required = false,
	disabled = false,
	size = "md",
	value,
	color,
	onChange,
	positionLabel = "end",
	description,
	error,
	touched,
	className,
	...props
}: CheckboxProps) => {
	const [valueCheck, setValueCheck] = useState<boolean>(false);

	useEffect(() => {
		setValueCheck(value);
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (!disabled) {
			onChange(!valueCheck);
		}
	};

	const classText = clsx(
		"text-text-800 leading-none",
		size === "sm" && "text-xs",
		size === "md" && "text-sm",
		size === "lg" && "text-base",

		required && "after:content-['*'] after:ml-0.5",
		disabled ? "after:text-neutral-800" : "after:text-danger-700"
	);

	const classSvg = twMerge(
		clsx(
			"absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2",
			valueCheck && "block",
			size === "sm" && "h-3 w-3",
			size === "md" && "h-4 w-4",
			size === "lg" && "h-5 w-5"
		)
	);

	const classInput = clsx(
		disabled && "bg-text-100 checked:bg-text-500 border-text-500"
	);

	return (
		<div className={className}>
			<div
				className={clsx(
					"flex gap-2 w-fit",
					description && label ? "items-start" : "items-center"
				)}
			>
				{positionLabel === "start" && (label || description) ? (
					<div onClick={handleClick} className="cursor-pointer">
						{label ? <p className={classText}>{label}</p> : null}
						{description ? (
							<p className="text-xs text-text-800">{description}</p>
						) : null}
					</div>
				) : null}

				<div className="relative flex">
					<input
						id={id}
						type="checkbox"
						checked={valueCheck}
						onChange={handleChange}
						disabled={disabled}
						onClick={(e) => e.stopPropagation()}
						className={cn(
							CheckboxClassProps({
								size,
								color,
							}),
							classInput
						)}
						{...props}
					/>
					<svg
						className={classSvg}
						onClick={handleClick}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#fff"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
				</div>

				{positionLabel === "end" && (label || description) ? (
					<div onClick={handleClick} className="cursor-pointer">
						{label ? <p className={classText}>{label}</p> : null}
						{description ? (
							<p className="text-xs text-text-800">{description}</p>
						) : null}
					</div>
				) : null}
			</div>

			{!disabled && error && touched && <LabelErrorForm text={error} />}
		</div>
	);
};
