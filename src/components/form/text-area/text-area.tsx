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
			size: {
				sm: "py-1 px-2.5 text-xs h-20",
				md: "py-2 px-2.5 text-sm h-24",
				lg: "py-2 px-2.5 text-sm h-28",
			},
		},
		compoundVariants: [],
		defaultVariants: {
			size: "md",
		},
	}
);

export type TextAreaProps = VariantProps<typeof TextAreaClassProps> &
	TextAreaComponentProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			value,
			size = "md",
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
			...props
		},
		ref
	) => {
		const classError = clsx({
			"border-danger-700 focus:border-danger-700 focus:shadow-inputError placeholder:text-danger-700 text-danger-700":
				!disabled && error && touched,
		});

		const classIcon = clsx(
			"absolute flex items-center cursor-pointer px-2 text-text-800",
			{
				"text-danger-700": !disabled && error && touched,
				"opacity-50": disabled,
				"top-1.5 text-sm": size === "sm",
				"top-3": size === "md" || size === "lg",
			}
		);

		const classPadding = clsx({ "pl-7": startContent });

		const isErrorLabel = !disabled && error && touched && isErrorText;

		const classNameInput = cn(
			TextAreaClassProps({
				size,
				className,
			}),
			classError,
			classPadding
		);

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			e.preventDefault();
			if (FC_ValidatePatternInput(pattern, e.target.value)) {
				onChange && onChange(e);
			}
		};

		return (
			<div className={twMerge("w-full", classNameContainer)}>
				<div className="w-full relative flex">
					{startContent ? (
						<div className={twMerge(classIcon, "left-0")}>{startContent}</div>
					) : null}

					<textarea
						ref={ref}
						value={value}
						autoComplete="off"
						autoCapitalize="off"
						onChange={handleChange}
						maxLength={maxLength}
						className={classNameInput}
						disabled={disabled}
						{...props}
					/>
				</div>

				{isErrorText || isLabelCounter ? (
					<div
						className={clsx(
							"flex mt-1",
							isErrorLabel
								? "justify-between items-center gap-3"
								: "justify-end"
						)}
					>
						{isErrorLabel ? (
							<LabelErrorForm text={error} className="mt-0" />
						) : null}

						{isLabelCounter && maxLength && maxLength > 0 ? (
							<p className="text-[10px] font-thin text-text-800 text-nowrap leading-none">
								{`${value.length} / ${maxLength}`}
							</p>
						) : null}
					</div>
				) : null}
			</div>
		);
	}
);
