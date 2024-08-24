import { twMerge } from "tailwind-merge";
import { LabelErrorProps } from "./interface/label.interface";

export const LabelErrorForm = ({ text, className }: LabelErrorProps) => {
	return (
		<p
			className={twMerge(
				"text-danger-700 text-xs mt-1 before:content-['*'] before:mr-1",
				className
			)}
		>
			{text}
		</p>
	);
};
