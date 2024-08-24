import { cn } from "@/functions";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { AvatarComponentProps } from "./interface/avatar.interface";

const AvatarClassProps = cva([], {
	variants: {
		borderColor: {
			primary: "ring-primary-700",
			secondary: "ring-secondary-700",
			neutral: "ring-neutral-700",
			success: "ring-success-700 ",
			danger: "ring-danger-700",
			warning: "ring-warning-700",
			default: "ring-text-500",
		},
		size: {
			xs: "w-6 h-6 text-[10px]",
			sm: "w-8 h-8 text-xs",
			md: "w-10 h-10 text-base",
			lg: "w-12 h-12 text-base",
		},
		radius: {
			sm: "rounded-lg",
			md: "rounded-xl",
			lg: "rounded-2xl",
			full: "rounded-full",
		},
	},
});

export type AvatarProps = VariantProps<typeof AvatarClassProps> &
	AvatarComponentProps;

export const Avatar = ({
	className,
	classNameContainer,
	borderColor = "default",
	content,
	isBorder = false,
	isDisabled = false,
	name,
	radius = "full",
	size = "md",
	src,
	status = "active",
	isStatus = false,
	bg,
	onClick,
}: AvatarProps) => {
	const srcCustom = useMemo(() => {
		if (!src) return null;

		return (
			<img
				src={src}
				alt=""
				className={cn(
					AvatarClassProps({
						radius,
					}),
					"object-cover w-full h-full"
				)}
			/>
		);
	}, [radius, src]);

	const contentCustom = useMemo(() => {
		if (src) return null;

		return content;
	}, [content, src]);

	const nameCustom = useMemo(() => {
		if (src || content) return null;

		if (name) {
			let valueSize = "text-xs";

			switch (size) {
				case "xs":
				case "sm":
					break;
				case "md":
					valueSize = "text-md";
					break;
				case "lg":
					valueSize = "text-md";
					break;
			}

			return <span className={`${valueSize}`}>{name}</span>;
		}
	}, [content, name, size, src]);

	const childrenCustom = useMemo(() => {
		const colorText = bg ? "text-white" : "text-text-900";

		const border = isBorder && "ring ring-2";

		let backgroundColor = bg || "bg-neutral-300";

		if (src) {
			switch (borderColor) {
				case "primary":
				case "secondary":
				case "neutral":
				case "success":
				case "warning":
				case "danger":
					backgroundColor = `bg-white`;
					break;
				case "default":
					backgroundColor = "bg-neutral-300";
					break;
			}
		}

		return (
			<div
				className={cn(
					"flex justify-center items-center overflow-hidden bg-white",
					border,
					colorText,
					backgroundColor,
					AvatarClassProps({
						size,
						className,
						radius,
					}),
					isBorder &&
						AvatarClassProps({
							borderColor,
						})
				)}
			>
				{srcCustom}
				{contentCustom}
				{nameCustom}
			</div>
		);
	}, [
		bg,
		borderColor,
		className,
		isBorder,
		radius,
		size,
		src,
		nameCustom,
		contentCustom,
		srcCustom,
	]);

	const statusClass = clsx(
		size === "xs" && "-bottom-[5%] -right-[5%] w-2.5 h-2.5 border",
		size === "sm" && "-bottom-[5%] -right-[5%] w-3.5 h-3.5 border",
		size === "md" && "-bottom-[5%] -right-[5%] w-4 h-4 border-2",
		size === "lg" && "-bottom-[5%] -right-[5%] w-5 h-5 border-2",

		status === "active" && "bg-success-700",
		status === "pending" && "bg-warning-700",
		status === "inactive" && "bg-text-500"
	);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (isDisabled) return;
		onClick && onClick(e);
	};

	return (
		<div
			className={twMerge(
				"w-fit relative",
				clsx(isDisabled && "opacity-50"),
				classNameContainer
			)}
			onClick={handleClick}
		>
			{childrenCustom}

			{isStatus ? (
				<div
					className={twMerge(
						"absolute bg-success-700 rounded-full border-white",
						statusClass
					)}
				/>
			) : null}
		</div>
	);
};
