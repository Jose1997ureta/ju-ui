import { twMerge } from "tailwind-merge";
import { PaginationItemProps } from "./interface/pagination.interface";
import clsx from "clsx";

export const PaginationItem = ({
	className,
	color = "secondary",
	active,
	children,
	text,
	onClick,
}: PaginationItemProps) => {
	const bgClass = clsx({
		"bg-primary-700": color === "primary" && active,
		"bg-secondary-700": color === "secondary" && active,
		"bg-neutral-700": color === "neutral" && active,
		"bg-neutral-100": color === "default",
	});
	const colorClass = clsx("text-text-800 text-sm", {
		"group-hover:text-primary-700": color === "primary" && !active,
		"group-hover:text-secondary-700": color === "secondary" && !active,
		"group-hover:text-neutral-700": color === "neutral" && !active,
		"text-white": active,
	});

	return (
		<div
			className={twMerge(
				"w-[32px] h-[30px] rounded flex items-center justify-center group",
				bgClass,
				className
			)}
			onClick={onClick}
		>
			{children || <p className={colorClass}>{text}</p>}
		</div>
	);
};
