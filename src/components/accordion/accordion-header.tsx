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
	const { color, radius } = useAccodionContext();

	const colorClass = clsx({
		"bg-primary-50": color === "primary",
		"bg-secondary-50": color === "secondary",
		"bg-neutral-100": color === "default",
	});

	const radiusTopClass = clsx({
		"rounded-t-sm": radius === "xs",
		"rounded-t": radius === "sm",
		"rounded-t-md": radius === "md",
		"rounded-t-lg": radius === "lg",
	});

	const radiusBottomClass = clsx({
		"rounded-b-sm": radius === "xs" && !active,
		"rounded-b": radius === "sm" && !active,
		"rounded-b-md": radius === "md" && !active,
		"rounded-b-lg": radius === "lg" && !active,
	});

	return (
		<div
			className={twMerge(
				"flex items-center justify-between gap-x-2 px-3 py-3 cursor-pointer",
				colorClass,
				radiusTopClass,
				clsx(!active ? radiusBottomClass : ""),
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
