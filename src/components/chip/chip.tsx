import { cn } from "@/functions";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { ChipComponentProps } from "./interface/chip.interface";

const ChipClassProps = cva(["w-fit flex items-center text-white"], {
	variants: {
		color: {
			primary: "",
			secondary: "",
			neutral: "",
			success: "",
			danger: "",
			warning: "",
			white: "",
			default: "",
		},
		size: {
			sm: "px-2 h-6 text-xs",
			md: "px-2.5 h-7 text-xs",
			lg: "px-3.5 h-8 text-sm",
		},
		variant: {
			solid: "text-white",
			outline: "border",
			flat: "",
		},
		radius: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			full: "rounded-full",
		},
	},
	compoundVariants: [
		/* PRIMARY */
		{
			color: "primary",
			variant: "solid",
			className: "bg-primary-700",
		},
		{
			color: "primary",
			variant: "outline",
			className: "border-primary-700 text-primary-700",
		},
		{
			color: "primary",
			variant: "flat",
			className: "bg-primary-100 text-primary-700",
		},
		/* SECONDARY */
		{
			color: "secondary",
			variant: "solid",
			className: "bg-secondary-700",
		},
		{
			color: "secondary",
			variant: "outline",
			className: "border-secondary-700 text-secondary-700",
		},
		{
			color: "secondary",
			variant: "flat",
			className: "bg-secondary-100 text-secondary-700",
		},
		/* NEUTRAL */
		{
			color: "neutral",
			variant: "solid",
			className: "bg-neutral-700",
		},
		{
			color: "neutral",
			variant: "outline",
			className: "border-neutral-700 text-neutral-700",
		},
		{
			color: "neutral",
			variant: "flat",
			className: "bg-neutral-300 text-neutral-700",
		},
		/* SUCCESS */
		{
			color: "success",
			variant: "solid",
			className: "bg-success-700",
		},
		{
			color: "success",
			variant: "outline",
			className: "border-success-700 text-success-700",
		},
		{
			color: "success",
			variant: "flat",
			className: "bg-success-100 text-success-700",
		},
		/* WARNING */
		{
			color: "warning",
			variant: "solid",
			className: "bg-warning-700",
		},
		{
			color: "warning",
			variant: "outline",
			className: "border-warning-700 text-warning-700",
		},
		{
			color: "warning",
			variant: "flat",
			className: "bg-warning-100 text-warning-700",
		},
		/* DANGER */
		{
			color: "danger",
			variant: "solid",
			className: "bg-danger-700",
		},
		{
			color: "danger",
			variant: "outline",
			className: "border-danger-700 text-danger-700",
		},
		{
			color: "danger",
			variant: "flat",
			className: "bg-danger-100 text-danger-700",
		},
		/* WHITE */
		{
			color: "white",
			variant: "solid",
			className: "border border-neutral-300 text-text-800",
		},
		{
			color: "white",
			variant: "outline",
			className: "border-neutral-300 text-text-800",
		},
		{
			color: "white",
			variant: "flat",
			className: "border border-neutral-300 text-text-800",
		},
	],
	defaultVariants: {
		size: "sm",
		radius: "full",
		color: "primary",
		variant: "solid",
	},
});

export type ChipProps = VariantProps<typeof ChipClassProps> &
	ChipComponentProps;

export const Chip = ({
	children,
	className,
	color = "primary",
	disabled = false,
	radius = "full",
	size = "sm",
	variant = "solid",
	onClick,
}: ChipProps) => {
	const disabledClassName = clsx(disabled && "opacity-50");

	return (
		<div
			className={cn(
				ChipClassProps({
					color,
					size,
					radius,
					variant,
					className,
				}),
				disabledClassName
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
