import { cn } from "@/functions";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ChipComponentProps } from "./interface/chip.interface";

const ChipClassProps = cva(["w-fit flex items-center text-white"], {
	variants: {
		// color: {
		// 	primary: "bg-primary-100 text-primary-700",
		// 	secondary: "bg-secondary-100 text-secondary-700",
		// 	neutral: "bg-neutral-100 text-neutral-700",
		// 	success: "bg-success-100 text-success-700",
		// 	danger: "bg-danger-100 text-danger-700",
		// 	warning: "bg-warning-100 text-warning-800",
		// 	white: "bg-white text-text-800",
		// 	default: "bg-neutral-300 text-text-800",
		// },
		size: {
			sm: "px-2 h-6 text-xs",
			md: "px-2.5 h-7 text-xs",
			lg: "px-3.5 h-8 text-sm",
		},

		radius: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			full: "rounded-full",
		},
	},
	defaultVariants: {
		size: "sm",
		radius: "sm",
	},
});

export type ChipProps = VariantProps<typeof ChipClassProps> &
	ChipComponentProps;

export const Chip = ({
	children,
	className,
	color = "neutral",
	isDisabled = false,
	radius = "full",
	size = "sm",
	variant = "solid",
	onClick,
}: ChipProps) => {
	const disabledClassName = clsx(isDisabled && "opacity-50");

	const colorClassName = twMerge(
		clsx(
			variant === "solid" && "text-white",
			color === "primary"
				? variant === "solid"
					? "bg-primary-700"
					: "bg-primary-100 text-primary-700"
				: "",
			color === "secondary"
				? variant === "solid"
					? "bg-secondary-700"
					: "bg-secondary-100 text-secondary-700"
				: "",
			color === "neutral"
				? variant === "solid"
					? "bg-neutral-700"
					: "bg-neutral-300 text-text-800"
				: "",
			color === "success"
				? variant === "solid"
					? "bg-success-700"
					: "bg-success-100 text-success-700"
				: "",
			color === "warning"
				? variant === "solid"
					? "bg-warning-700"
					: "bg-warning-100 text-warning-800"
				: "",
			color === "danger"
				? variant === "solid"
					? "bg-danger-700"
					: "bg-danger-100 text-danger-700"
				: "",
			color === "white"
				? variant === "solid"
					? "bg-white text-text-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)]"
					: "bg-white text-text-800 border-neutral-100 border"
				: ""
		)
	);

	return (
		<div
			className={cn(
				ChipClassProps({
					size,
					radius,
					className,
				}),
				disabledClassName,
				colorClassName
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
