import { cn } from "@/functions";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { BadgeComponentProps } from "./interface/badge.interface";

const BadgeClassProps = cva(
	[
		"absolute rounded-full z-10 px-1 flex items-center justify-center text-sm text-white",
	],
	{
		variants: {
			color: {
				primary: "bg-primary-700",
				secondary: "bg-secondary-700",
				neutral: "bg-neutral-700",
				success: "bg-success-700",
				danger: "bg-danger-700",
				warning: "bg-warning-700",
				white: "bg-white",
			},
			size: {
				sm: "min-w-5 h-5 text-xs",
				md: "min-w-6 h-6 text-sm",
				lg: "min-w-7 h-7 text-base",
			},
			position: {
				"top-right": "top-[5%] right-[2%] translate-x-1/2 -translate-y-1/2",
				"top-left": "top-[5%] left-[2%] -translate-x-1/2 -translate-y-1/2",
				"bottom-right":
					"bottom-[10%] right-[2%] translate-x-1/2 translate-y-1/2",
				"bottom-left":
					"bottom-[5%] left-[2%] -translate-x-1/2 translate-y-1/2",
			},
		},
		defaultVariants: {
			color: "primary",
			size: "md",
		},
	}
);

export type BadgeProps = VariantProps<typeof BadgeClassProps> &
	BadgeComponentProps;

export const Badge = ({
	children,
	content,
	position = "top-right",
	color = "primary",
	className,
	classNameContainer,
	isShow = true,
	showOutline = true,
	size = "md",
}: BadgeProps) => {
	const borderClass = clsx(showOutline ? "border-2 border-white" : "");

	return (
		<div className={twMerge("relative w-fit", classNameContainer)}>
			{isShow ? (
				<span
					className={cn(
						BadgeClassProps({
							color,
							size,
							position,
							className,
						}),
						borderClass
					)}
				>
					{content}
				</span>
			) : null}

			{children}
		</div>
	);
};
