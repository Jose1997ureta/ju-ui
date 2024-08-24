import { FC_ValidatePatternInput, cn } from "@/functions";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { LabelErrorForm } from "..";
import { forwardRef } from "react";
import { InputComponentProps } from "./interface/input.interface";

const InputClassProps = cva(
	[
		"w-full",
		"outline-none",
		"transition",
		"appearance-none",
		"border",
		"border-text-700",
		"rounded-md",
		"focus:border-primary-700",
		"focus:shadow-inputBase",
		"disabled:text-text-700",
		"relative",
		"text-text-800",
	],
	{
		variants: {
			sizes: {
				sm: "h-[30px] text-xs",
				md: "h-[34px] text-sm",
				lg: "h-[38px] text-sm",
			},
		},
		compoundVariants: [],
		defaultVariants: {
			sizes: "md",
		},
	}
);

export type InputProps = VariantProps<typeof InputClassProps> &
	InputComponentProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type = "text",
			sizes = "md",
			className,
			classNameContainer,
			startContent,
			endContent,
			error = undefined,
			touched = false,
			isErrorText = true,
			disabled,
			pattern = "",
			value,
			onBlur,
			onChange,
			placeholder,
			name,
			...props
		},
		ref
	) => {
		const classError = clsx({
			"border-danger-700 focus:border-danger-700 focus:shadow-inputError placeholder:text-danger-700 text-danger-700":
				!disabled && error && touched,
		});

		const classIcon = clsx(
			"absolute top-0 h-full flex items-center cursor-pointer px-1.5 text-text-800 z-[1]",
			{
				"text-danger-700": !disabled && error && touched,
				"opacity-50": disabled,
			}
		);

		const classPadding = clsx(
			startContent ? "pl-7" : "pl-2.5",
			endContent ? "pr-7" : "pr-2.5"
		);

		const classNameInput = cn(
			InputClassProps({
				sizes,
				className,
			}),
			classError,
			classPadding
		);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			e.preventDefault();

			if (FC_ValidatePatternInput(pattern, e.target.value)) {
				onChange && onChange(e);
			}
		};

		return (
			<div className={twMerge(classNameContainer)}>
				<div className="w-full relative ">
					{startContent ? (
						<div className={twMerge("left-0", classIcon)}>{startContent}</div>
					) : null}

					<input
						ref={ref}
						name={name}
						autoComplete="off"
						type={type}
						onChange={handleChange}
						className={classNameInput}
						disabled={disabled}
						placeholder={placeholder}
						value={value}
						onBlur={onBlur}
						{...props}
					/>
					{endContent ? (
						<div className={twMerge("right-0", classIcon)}>{endContent}</div>
					) : null}
				</div>

				{!disabled && error && touched && isErrorText && (
					<LabelErrorForm text={error} />
				)}
			</div>
		);
	}
);
