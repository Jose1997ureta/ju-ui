import clsx from "clsx";
import { AccordionBodyProps } from "./interface/accordion.interface";
import { twMerge } from "tailwind-merge";
import { useAccodionContext } from "./hooks/use-accordion";

export const AccordionBody = ({
	className,
	active,
	children,
}: AccordionBodyProps) => {
	const { radius } = useAccodionContext();

	const radiusBottomClass = clsx({
		"rounded-b-sm": radius === "xs",
		"rounded-b": radius === "sm",
		"rounded-b-md": radius === "md",
		"rounded-b-lg": radius === "lg",
	});

	return (
		<div
			className={clsx(
				`grid transition-all duration-300 ease-in-out`,
				active
					? twMerge("grid-rows-[1fr] opacity-100")
					: "grid-rows-[0fr] opacity-0 overflow-hidden"
			)}
		>
			<div className={twMerge("overflow-hidden", radiusBottomClass)}>
				<div className={twMerge("bg-white", className)}>{children}</div>
			</div>
		</div>
	);
};
