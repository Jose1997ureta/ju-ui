import { VariantProps, cva } from "class-variance-authority";

import { RadioComponentProps } from "./interface/radio.interface";
import clsx from "clsx";
import { cn } from "@/functions";
import { twMerge } from "tailwind-merge";
import { LabelErrorForm } from "../label";

const RadioClassProps = cva(
	["rounded-full border-2 peer appearance-none disabled:border-neutral-200"],
	{
		variants: {
			color: {
				primary: "border-primary-700",
				secondary: "border-secondary-700",
				neutral: "border-neutral-700",
			},
			size: {
				sm: "w-[18px] h-[18px]",
				md: "w-5 h-5",
				lg: "w-[22px] h-[22px]",
			},
		},
		defaultVariants: {
			color: "secondary",
			size: "md",
		},
	}
);

export type RadioProps = VariantProps<typeof RadioClassProps> &
	RadioComponentProps;

export const Radio = ({
	id = "radio",
	name,
	color = "primary",
	size = "md",
	className,

	disabled = false,
	label,
	description,
	positionLabel = "end",
	error,
	touched,
	checked,
	value,
	onChange,
}: RadioProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();

		if (disabled) return;
		onChange && onChange(e);
	};

	const classText = clsx(
		"text-text-800 leading-none",
		size === "sm" && "text-xs",
		size === "md" && "text-sm",
		size === "lg" && "text-sm"
	);

	const classValue = clsx({
		"w-2.5 h-2.5": size === "sm",
		"w-3 h-3": size === "md",
		"w-[14px] h-[14px]": size === "lg",

		"peer-checked:bg-neutral-200": disabled,

		"peer-checked:bg-primary-700": color === "primary" && !disabled,
		"peer-checked:bg-secondary-700": color === "secondary" && !disabled,
		"peer-checked:bg-neutral-700": color === "neutral" && !disabled,
	});

	return (
		<div className={className}>
			<label
				className={clsx(
					"flex gap-x-2",
					!disabled && "cursor-pointer",
					description && label ? "items-start" : "items-center"
				)}
			>
				{positionLabel === "start" && (label || description) ? (
					<div>
						{label ? <p className={classText}>{label}</p> : null}
						{description ? (
							<p className="text-xs text-text-800">{description}</p>
						) : null}
					</div>
				) : null}

				<div className="relative flex justify-center items-center">
					<input
						id={id}
						type="radio"
						name={name}
						className={cn(
							RadioClassProps({
								size,
								color,
							})
						)}
						disabled={disabled}
						value={value}
						onChange={handleChange}
						defaultChecked={value === checked}
					/>
					<div className={twMerge("absolute rounded-full", classValue)} />
				</div>

				{positionLabel === "end" && (label || description) ? (
					<div>
						{label ? <p className={classText}>{label}</p> : null}
						{description ? (
							<p className="text-xs text-text-800">{description}</p>
						) : null}
					</div>
				) : null}
			</label>

			{!disabled && error && touched && <LabelErrorForm text={error} />}
		</div>
	);
};
