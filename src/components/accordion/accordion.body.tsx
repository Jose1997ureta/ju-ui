import clsx from "clsx";
import { AccordionBodyProps } from "./interface/accordion.interface";
import { twMerge } from "tailwind-merge";

export const AccordionBody = ({
	className,
	active,
	children,
}: AccordionBodyProps) => {
	return (
		<div
			className={clsx(
				`grid overflow-hidden transition-all duration-300 ease-in-out`,
				active
					? twMerge("grid-rows-[1fr] opacity-100 px-3 py-2", className)
					: "grid-rows-[0fr] opacity-0"
			)}
		>
			<div className={twMerge("overflow-hidden", className)}>{children}</div>
		</div>
	);
};
