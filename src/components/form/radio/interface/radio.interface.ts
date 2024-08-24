import { ColorProps, ExcludeType, SizeProps } from "@/interfaces";

export type RadioComponentProps = {
	name: string;

	size?: ExcludeType<SizeProps, "xs">;
	color?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
	disabled?: boolean;
	label?: string;
	description?: string;
	positionLabel?: "start" | "end";

	error?: string;
	touched?: boolean;

	value: string;
	checked?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};
