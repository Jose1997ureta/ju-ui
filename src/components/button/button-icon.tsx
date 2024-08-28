import { forwardRef } from "react";
import { LuLoader2 } from "react-icons/lu";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/functions";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ButtonIconComponentProps } from "./interface/button.interface";

const ButtonClassProps = cva(
	[
		"cursor-pointer relative outline-none disabled:cursor-not-allowed transition font-medium flex items-center justify-center",
	],
	{
		variants: {
			color: {
				default: "",
				primary: "",
				secondary: "",
				neutral: "",
				success: "",
				warning: "",
				danger: "",
			},
			size: {
				xs: "w-5 h-5 text-xs",
				sm: "w-6 h-6 text-xs",
				md: "w-7 h-7 text-md",
				lg: "w-8 h-8 text-xl",
			},
			radius: {
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				full: "rounded-full",
			},
			variant: {
				solid: "",
				outline: "border",
				light: "",
				flat: "",
			},
		},

		compoundVariants: [
			/* DEFAULT */
			{
				variant: "solid",
				color: "default",
				className:
					"bg-text-700 disabled:opacity-50 text-white disabled:hover:bg-text-500",
			},

			{
				variant: "outline",
				color: "default",
				className:
					"text-text-700 border-text-700 bg-white hover:bg-text-700 hover:text-white disabled:hover:bg-white disabled:hover:text-text-700 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "default",
				className:
					"text-text-700 hover:bg-text-100 disabled:hover:bg-white disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "default",
				className: "text-text-700 bg-text-100 disabled:opacity-50",
			},
			/* Primary */
			{
				variant: "solid",
				color: "primary",
				className: "bg-primary-700 disabled:opacity-50 text-white",
			},
			{
				variant: "outline",
				color: "primary",
				className:
					"text-primary-700 border-primary-700 bg-white hover:bg-primary-700 hover:text-white disabled:hover:bg-white disabled:hover:text-primary-700 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "primary",
				className:
					"text-primary-700 hover:bg-primary-100 disabled:hover:bg-white disabled:hover:text-primary-700 disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "primary",
				className: "text-primary-700 bg-primary-100 disabled:opacity-50",
			},
			/* SECONDARY */
			{
				variant: "solid",
				color: "secondary",
				className: "bg-secondary-700 disabled:opacity-50 text-white",
			},
			{
				variant: "outline",
				color: "secondary",
				className:
					"text-secondary-700 border-secondary-700 bg-white hover:bg-secondary-700 hover:text-white disabled:hover:bg-white disabled:hover:text-secondary-700 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "secondary",
				className:
					"text-secondary-700 hover:bg-secondary-100 disabled:hover:bg-white disabled:hover:text-secondary-700 disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "secondary",
				className: "text-secondary-700 bg-secondary-100 disabled:opacity-50",
			},
			/* NEUTRAL */
			{
				variant: "solid",
				color: "neutral",
				className: "bg-neutral-700  disabled:opacity-50 text-white",
			},
			{
				variant: "outline",
				color: "neutral",
				className:
					"text-neutral-700 border-neutral-700 bg-white hover:bg-neutral-700 hover:text-white disabled:hover:bg-white disabled:hover:text-neutral-700 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "neutral",
				className:
					"text-neutral-700 hover:bg-neutral-300 disabled:hover:bg-white disabled:hover:text-neutral-700 disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "neutral",
				className: "text-neutral-700 bg-neutral-300 disabled:opacity-50",
			},
			/* SUCCESS */
			{
				variant: "solid",
				color: "success",
				className: "bg-success-700 disabled:opacity-50 text-white",
			},
			{
				variant: "outline",
				color: "success",
				className:
					"text-success-700 border-success-700 bg-white hover:bg-success-700 hover:text-white disabled:hover:bg-white disabled:hover:text-success-700 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "success",
				className:
					"text-success-700 hover:bg-success-100 disabled:hover:bg-white disabled:hover:text-success-700 disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "success",
				className: "text-success-700 bg-success-100 disabled:opacity-50",
			},
			/* WARNING */
			{
				variant: "solid",
				color: "warning",
				className: "bg-warning-700 disabled:opacity-50 text-white",
			},
			{
				variant: "outline",
				color: "warning",
				className:
					"text-warning-700 border-warning-700 bg-white hover:bg-warning-700 hover:text-white disabled:hover:bg-white disabled:hover:text-warning-700 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "warning",
				className:
					"text-warning-700 hover:bg-warning-100 disabled:hover:bg-white disabled:hover:text-warning-700 disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "warning",
				className: "text-warning-700 bg-warning-100 disabled:opacity-50",
			},
			/* DANGER */
			{
				variant: "solid",
				color: "danger",
				className: "bg-danger-700 disabled:opacity-50 text-white",
			},
			{
				variant: "outline",
				color: "danger",
				className:
					"text-danger-700 border-danger-700 bg-white hover:bg-danger-700 hover:text-white disabled:hover:bg-white disabled:hover:text-danger-800 disabled:opacity-50",
			},
			{
				variant: "light",
				color: "danger",
				className:
					"text-danger-700 hover:bg-danger-100 disabled:hover:bg-white disabled:hover:text-danger-700 disabled:opacity-50",
			},
			{
				variant: "flat",
				color: "danger",
				className: "text-danger-700 bg-danger-100 disabled:opacity-50",
			},
		],
		defaultVariants: {
			size: "sm",
			color: "primary",
			variant: "solid",
		},
	}
);

export type ButtonIconProps = VariantProps<typeof ButtonClassProps> &
	ButtonIconComponentProps;

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
	(
		{
			children,
			size = "sm",
			color = "neutral",
			variant = "solid",
			className,
			radius = "full",
			disabled = false,
			loading = false,
			onClick,
			...props
		},
		ref
	) => {
		const classLoading = twMerge(
			"animate-spin fill-transparent",
			clsx(
				size === "sm" && "w-4 h-4",
				size === "md" && "w-5 h-5",
				size === "lg" && "w-5 h-5"
			)
		);

		return (
			<button
				ref={ref}
				className={cn(
					ButtonClassProps({
						size,
						color,
						variant,
						radius,
						className,
					}),
					!disabled && "active:scale-[0.98]"
				)}
				disabled={disabled}
				onClick={onClick}
				{...props}
			>
				{loading ? <LuLoader2 className={classLoading} /> : children}
			</button>
		);
	}
);
