import { forwardRef } from "react";
import { LuLoader2 } from "react-icons/lu";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/functions";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ButtonComponentProps } from "./interface/button.interface";

const ButtonClassProps = cva(
	[
		"rounded-md cursor-pointer relative outline-none disabled:cursor-not-allowed  transition font-medium flex items-center gap-2",
	],
	{
		variants: {
			color: {
				primary: "",
				secondary: "",
				neutral: "",
				success: "",
				warning: "",
				danger: "",
			},
			size: {
				sm: "py-1.5 px-3 text-xs",
				md: "py-2 px-3 text-xs",
				lg: "py-2.5 px-3 text-sm",
			},
			variant: {
				solid: "",
				outline: "border",
			},
		},

		compoundVariants: [
			/* PRIMARY */
			{
				variant: "solid",
				color: "primary",
				className:
					"bg-primary-700 hover:bg-primary-800 disabled:opacity-50 text-white disabled:hover:bg-primary-700",
			},
			{
				variant: "outline",
				color: "primary",
				className:
					"text-primary-700 border-primary-700 bg-white disabled:opacity-50",
			},
			/* SECONDARY */
			{
				variant: "solid",
				color: "secondary",
				className:
					"bg-secondary-700 hover:bg-secondary-800 disabled:opacity-50 text-white disabled:hover:bg-secondary-700",
			},
			{
				variant: "outline",
				color: "secondary",
				className:
					"text-secondary-700 border-secondary-700 bg-white disabled:opacity-50",
			},
			/* NEUTRAL */
			{
				variant: "solid",
				color: "neutral",
				className:
					"bg-neutral-700 hover:bg-neutral-800 disabled:opacity-50 text-white disabled:hover:bg-neutral-700",
			},
			{
				variant: "outline",
				color: "neutral",
				className:
					"text-neutral-700 border-neutral-700 bg-white disabled:opacity-50",
			},
			/* SUCCESS */
			{
				variant: "solid",
				color: "success",
				className:
					"bg-success-700 hover:bg-success-800 disabled:opacity-50 text-white disabled:hover:bg-success-700",
			},
			{
				variant: "outline",
				color: "success",
				className:
					"text-success-700 border-success-700 bg-white disabled:opacity-50",
			},
			/* WARNING */
			{
				variant: "solid",
				color: "warning",
				className:
					"bg-warning-700 hover:bg-warning-800 disabled:opacity-50 text-white disabled:hover:bg-warning-700",
			},
			{
				variant: "outline",
				color: "warning",
				className:
					"text-warning-800 border-warning-700 bg-white disabled:opacity-50",
			},
			/* DANGER */
			{
				variant: "solid",
				color: "danger",
				className:
					"bg-danger-700 hover:bg-danger-800 disabled:opacity-50 text-white disabled:hover:bg-danger-700",
			},
			{
				variant: "outline",
				color: "danger",
				className:
					"text-danger-700 border-danger-700 bg-white disabled:opacity-50",
			},
		],
		defaultVariants: {
			size: "md",
			color: "primary",
			variant: "solid",
		},
	}
);

export type ButtonProps = VariantProps<typeof ButtonClassProps> &
	ButtonComponentProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			size = "md",
			color = "primary",
			variant = "solid",
			className,
			startContent,
			endContent,
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
				size === "sm" && "w-3 h-3",
				size === "md" && "w-4 h-4",
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
						className,
					}),
					!disabled && "active:scale-[0.98]"
				)}
				disabled={disabled}
				onClick={onClick}
				{...props}
			>
				{startContent || null}

				{children}

				{loading ? (
					<LuLoader2 className={classLoading} />
				) : (
					endContent || null
				)}
			</button>
		);
	}
);
