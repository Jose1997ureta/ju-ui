import { ExcludeType, PatternInputProps, SizeProps } from "@/interfaces";

export type TextAreaComponentProps = {
	className?: string;
	disabled?: boolean;
	maxLength?: number;
	value: string;
	sizes?: ExcludeType<SizeProps, "xs">;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	classNameContainer?: string;

	error?: string;
	touched?: boolean;

	isErrorText?: boolean;
	isLabelCounter?: boolean;

	startContent?: React.ReactNode | React.ReactNode[];
	pattern?: PatternInputProps;
	placeholder?: string;
};
