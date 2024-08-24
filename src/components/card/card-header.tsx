import { twMerge } from "tailwind-merge";
import { CardHeaderProps } from "./interface/card.interface";
import clsx from "clsx";

export const CardHeader = ({
	className,
	children,
	isBorder = true,
}: CardHeaderProps) => {
	return (
		<div
			className={twMerge(
				"px-3 py-3",
				clsx({
					"border-b border-neutral-200": isBorder,
				}),
				className
			)}
		>
			{children}
		</div>
	);
};
