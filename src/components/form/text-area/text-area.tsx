import { FC_ValidatePatternInput, cn } from "@/functions";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { LabelErrorForm } from "..";
import { TextAreaComponentProps } from "./interface/text-area.interface";

const TextAreaClassProps = cva(
	[
		"w-full",
		"outline-none",
		"disabled:cursor-not-allowed",
		"transition",
		"appearance-none",
		"border",
		"border-text-700",
		"rounded-md",
		"focus:border-primary-700",
		"focus:shadow-inputBase",
		"resize-none",
	],
	{
		variants: {
			sizes: {
				sm: "py-1 px-2.5 text-sm h-20",
				md: "py-2 px-2.5 text-sm h-24",
				lg: "py-3 px-2.5 text-sm h-28",
			},
		},
		compoundVariants: [],
		defaultVariants: {
			sizes: "md",
		},
	}
);

export type TextAreaProps = VariantProps<typeof TextAreaClassProps> &
	TextAreaComponentProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			value,
			sizes = "md",
			className,
			classNameContainer,
			startContent,
			error = undefined,
			touched = false,
			isErrorText = true,
			isLabelCounter = false,
			disabled,
			maxLength,
			pattern = "",
			onChange,
			onBlur,
			placeholder,
			...props
		},
		ref
	) => {
		const classError = twMerge(
			clsx(
				!disabled &&
					error &&
					touched &&
					"border-danger-700 focus:border-danger-700 focus:shadow-inputError placeholder:text-danger-700 text-danger-700"
			)
		);

		const classIcon = twMerge(
			"absolute top-2 flex items-center cursor-pointer px-2 text-text-700",
			clsx(
				!disabled && error && touched && "text-danger-700",
				disabled && "opacity-50",
				sizes === "sm" && "top-2",
				sizes === "md" && "top-3",
				sizes === "lg" && "top-4"
			)
		);

		const classPadding = twMerge(clsx(startContent && "pl-8"));

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			e.preventDefault();
			if (FC_ValidatePatternInput(pattern, e.target.value)) {
				onChange && onChange(e);
			}
		};

		return (
			<div className={twMerge("w-full", classNameContainer)}>
				<div className="w-full relative">
					{startContent ? (
						<div className={cn(classIcon, "left-0")}>{startContent}</div>
					) : null}

					<textarea
						ref={ref}
						autoComplete="off"
						onChange={handleChange}
						onBlur={onBlur}
						value={value}
						maxLength={maxLength}
						className={cn(
							TextAreaClassProps({
								sizes,
								className,
							}),
							classError,
							classPadding
						)}
						disabled={disabled}
						placeholder={placeholder}
						{...props}
					/>
				</div>
				<div
					className={clsx(
						"flex gap-3",
						!disabled && error && touched && isErrorText
							? "justify-between items-center"
							: "justify-end"
					)}
				>
					{!disabled && error && touched && isErrorText ? (
						<LabelErrorForm text={error} className="mt-0" />
					) : null}

					{isLabelCounter && maxLength && maxLength > 0 ? (
						<p className="text-[10px] font-thin text-text-800 text-right text-nowrap">
							{`${value.length} / ${maxLength}`}
						</p>
					) : null}
				</div>
			</div>
		);
	}
);
