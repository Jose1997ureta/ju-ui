import { twMerge } from "tailwind-merge";
import { CardFooterProps } from "./interface/card.interface";
import clsx from "clsx";

export const CardFooter = ({
	className,
	children,
	isBorder = true,
}: CardFooterProps) => {
	return (
		<div
			className={twMerge(
				"p-3",
				clsx({
					"border-t border-neutral-200": isBorder,
				}),
				className
			)}
		>
			{children}
		</div>
	);
};
