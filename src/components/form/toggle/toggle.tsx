import { cn } from "@/functions";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { LabelErrorForm } from "..";
import { ToggleComponentProps } from "./interface/toggle.interface";

const ToggleClassProps = cva(
	[
		"flex items-center bg-neutral-300 cursor-pointer relative rounded-full p-0.5 shadow-sm",
	],
	{
		variants: {
			color: {
				primary: "bg-primary-700 hover:bg-primary-800",
				secondary: "bg-secondary-700 hover:bg-secondary-800",
				neutral: "bg-neutral-700 hover:bg-neutral-800",
				success: "bg-success-700 hover:bg-success-800",
				danger: "bg-danger-700 hover:bg-danger-800",
				warning: "bg-warning-800 hover:bg-warning-900",
			},
			size: {
				sm: "w-8 h-4",
				md: "w-10 h-5",
				lg: "w-12 h-6",
			},
		},
		defaultVariants: {
			color: "secondary",
			size: "sm",
		},
	}
);

export type ToggleProps = VariantProps<typeof ToggleClassProps> &
	ToggleComponentProps;

export const Toggle = ({
	id = "toggle",
	color,
	size = "md",
	className,
	disabled = false,
	label,
	description,
	positionLabel = "end",
	required,
	error,
	touched,
	value,
	onChange,
	...props
}: ToggleProps) => {
	const [valueCheck, setValueCheck] = useState<boolean>(false);

	useEffect(() => {
		setValueCheck(value);
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};

	const handleClick = () => {
		return !disabled && onChange(!valueCheck);
	};

	const classSpan = twMerge(
		"transition transform bg-white rounded-full",
		clsx(
			size === "sm" && "w-3 h-3",
			size === "md" && "w-4 h-4 ",
			size === "lg" && "w-5 h-5",

			size === "sm" && valueCheck && "translate-x-4",
			size === "md" && valueCheck && "translate-x-5",
			size === "lg" && valueCheck && "translate-x-6"
		)
	);

	const classLabel = twMerge(
		clsx(
			!valueCheck && "bg-neutral-300 hover:bg-text-300",
			disabled && "bg-text-100 hover:bg-text-100"
		)
	);

	const classText = clsx(
		"text-text-800 leading-none",
		size === "sm" && "text-xs",
		size === "md" && "text-sm",
		size === "lg" && "text-base",

		required && "after:content-['*'] after:ml-1",
		disabled ? "after:text-neutral-800" : "after:text-danger-700"
	);

	const classDescription = clsx(
		"text-xs text-text-800",
		required && !label && "after:content-['*'] after:ml-1",
		disabled && !label ? "after:text-neutral-800" : "after:text-danger-700"
	);

	return (
		<div className={twMerge(className)}>
			<div
				className={clsx(
					"flex gap-2",
					description && label ? "items-start" : "items-center"
				)}
			>
				{positionLabel === "start" && (label || description) ? (
					<div onClick={handleClick} className="cursor-pointer">
						{label ? <p className={classText}>{label}</p> : null}
						{description ? (
							<p className={classDescription}>{description}</p>
						) : null}
					</div>
				) : null}

				<label
					htmlFor={id}
					className={cn(
						ToggleClassProps({
							size,
							color,
						}),
						classLabel
					)}
				>
					<input
						type="checkbox"
						id={id}
						className="sr-only peer"
						onChange={handleChange}
						disabled={disabled}
						checked={valueCheck}
						{...props}
					/>
					<span className={classSpan}></span>
				</label>

				{positionLabel === "end" && (label || description) ? (
					<div onClick={handleClick} className="cursor-pointer">
						{label ? <p className={classText}>{label}</p> : null}
						{description ? (
							<p className={classDescription}>{description}</p>
						) : null}
					</div>
				) : null}
			</div>

			{!disabled && error && touched && <LabelErrorForm text={error} />}
		</div>
	);
};
