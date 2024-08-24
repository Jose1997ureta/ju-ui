import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { TableHeaderColumnProps } from "../interface/table.interface";

export const TableHeaderColumn = ({
	children,
	className,
	color = "primary",
	icon,
	text,
}: TableHeaderColumnProps) => {
	const colorClass = clsx({
		"bg-primary-100": color === "primary",
		"bg-secondary-100": color === "secondary",
		"bg-neutral-200": color === "neutral",
		"bg-white": color === "default",
	});

	return (
		<th
			className={twMerge(
				"sticky top-0 px-2 min-w-[160px] rounded-tr-lg rounded-tl-lg z-10 font-normal",
				colorClass,
				className
			)}
		>
			{children || (
				<div className="flex justify-between items-center gap-x-2">
					<p className="line-clamp-1 text-sm text-text-900 text-left">
						{text}
					</p>
					<div className="flex-1 justify-end flex">{icon}</div>
				</div>
			)}
		</th>
	);
};
