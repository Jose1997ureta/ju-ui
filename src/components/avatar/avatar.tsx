import { cn } from "@/functions";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { AvatarComponentProps } from "./interface/avatar.interface";

const AvatarClassProps = cva(["bg-neutral-300"], {
	variants: {
		border: {
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
	content,
	border,
	disabled = false,
	name,
	radius = "full",
	size = "md",
	src,
	status,
	onClick,
}: AvatarProps) => {
	const bodyAvatar = useMemo(() => {
		if (src) {
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
		}
		if (content) return content;
		if (name) {
			let valueSize = "text-xs";

			switch (size) {
				case "md":
					valueSize = "text-md";
					break;
				case "lg":
					valueSize = "text-md";
					break;
			}

			return <span className={`${valueSize}`}>{name}</span>;
		}
	}, [content, name, radius, size, src]);

	const childrenCustom = useMemo(() => {
		const avatarClasses = AvatarClassProps({
			size,
			radius,
		});

		const borderClasses = border
			? `ring ring-2 ${AvatarClassProps({ border })}`
			: "";

		return (
			<div
				className={cn(
					"cursor-pointer flex justify-center items-center overflow-hidden bg-white",
					avatarClasses,
					borderClasses,
					className,
					disabled ? "cursor-not-allowed" : "cursor-pointer"
				)}
			>
				{bodyAvatar}
			</div>
		);
	}, [bodyAvatar, border, className, disabled, radius, size]);

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
		if (disabled) return;
		onClick && onClick(e);
	};

	return (
		<div
			className={twMerge(
				"w-fit relative",
				clsx(disabled && "opacity-50"),
				classNameContainer
			)}
			onClick={handleClick}
		>
			{childrenCustom}

			{status ? (
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
