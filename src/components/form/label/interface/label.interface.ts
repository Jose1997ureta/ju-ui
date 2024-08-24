import { ExcludeType, SizeProps } from "@/interfaces";

export type LabelComponentProps = {
	id?: string;
	className?: string;
	size?: ExcludeType<SizeProps, "xs">;
	required?: boolean;
	label: string;
	classNameContainer?: string;
	disabled?: boolean;
	startContent?: React.ReactNode | React.ReactNode[];
	endContent?: React.ReactNode | React.ReactNode[];
};

export type LabelErrorProps = {
	text: string;
	className?: string;
};
