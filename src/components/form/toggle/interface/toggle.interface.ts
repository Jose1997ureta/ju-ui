import { ColorProps, ExcludeType, SizeProps } from "@/interfaces";

export type ToggleComponentProps = {
	id: string;
	sizes?: ExcludeType<SizeProps, "xs">;
	color?: ColorProps;
	disabled?: boolean;
	label?: string;
	description?: string;
	positionLabel?: "start" | "end";
	required?: boolean;
	error?: string;
	touched?: boolean;

	isErrorText?: boolean;

	value: boolean;
	onChange: (state: boolean) => void;
	className?: string;
};
