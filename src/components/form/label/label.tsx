import { cn } from "@/functions";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { LabelComponentProps } from "./interface/label.interface";

const LabelClassProps = cva(
	["text-text-800 leading-none flex justify-between"],
	{
		variants: {
			size: {
				sm: "text-xs",
				md: "text-sm",
				lg: "text-sm",
			},
		},
	}
);

export type LabelProps = VariantProps<typeof LabelClassProps> &
	LabelComponentProps;

export const LabelForm = forwardRef<HTMLLabelElement, LabelProps>(
	(
		{
			id,
			required = false,
			size = "sm",
			classNameContainer,
			className,
			label,
			startContent,
			endContent,
			disabled,
		},
		ref
	) => {
		const classLabel = clsx(
			required && "after:content-['*'] after:ml-0.5",
			disabled ? "after:text-text-800" : "after:text-danger-700"
		);

		const classContainer = twMerge(
			"flex justify-between items-center w-full text-text-800 mb-1",
			classNameContainer
		);

		return (
			<div className={classContainer}>
				<div className="flex items-center gap-1">
					{startContent || null}

					<label
						ref={ref}
						htmlFor={id}
						className={cn(
							LabelClassProps({
								size,
								className,
							}),
							classLabel
						)}
					>
						{label}
					</label>
				</div>
				{endContent || null}
			</div>
		);
	}
);
