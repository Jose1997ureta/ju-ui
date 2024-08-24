import { twMerge } from "tailwind-merge";
import { CardBodyProps } from "./interface/card.interface";

export const CardBody = ({ className, children }: CardBodyProps) => {
	return (
		<div
			className={twMerge(
				"p-3",

				className
			)}
		>
			{children}
		</div>
	);
};
