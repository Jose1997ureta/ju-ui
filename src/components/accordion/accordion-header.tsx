import { useAccodionContext } from "./hooks/use-accordion";
import { twMerge } from "tailwind-merge";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import { AccordionHeaderProps } from "./interface/accordion.interface";

export const AccordionHeader = ({
	title,
	active,
	className,
	children,
}: AccordionHeaderProps) => {
	const { color } = useAccodionContext();

	const colorClass = clsx({
		"bg-primary-100": color === "primary",
		"bg-secondary-100": color === "secondary",
		"bg-neutral-100": color === "default",
	});

	return (
		<div
			className={twMerge(
				"flex items-center justify-between gap-x-2 px-3 py-3 cursor-pointer ",
				colorClass,
				className
			)}
		>
			{children || (
				<>
					<p className="text-base text-text-800">{title}</p>

					<IoIosArrowDown
						className={clsx(
							active &&
								"transform rotate-180 transition-transform duration-300",
							"h-4 w-4 fill-text-800"
						)}
					/>
				</>
			)}
		</div>
	);
};
