import { twMerge } from "tailwind-merge";
import { LabelErrorProps } from "./interface/label.interface";

export const LabelErrorForm = ({ text, className }: LabelErrorProps) => {
	const classLabel = twMerge(
		"text-danger-700 text-xs mt-1.5 before:content-['*'] before:mr-1 leading-none",
		className
	);

	return <p className={classLabel}>{text}</p>;
};
