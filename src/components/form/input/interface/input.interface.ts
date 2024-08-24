import { ExcludeType, PatternInputProps, SizeProps } from "@/interfaces";

export type InputComponentProps = {
	id?: string;
	type?: "text" | "password" | "email";
	sizes?: ExcludeType<SizeProps, "xs">; // sm | md | lg
	className?: string;
	classNameContainer?: string;
	startContent?: React.ReactNode | React.ReactNode[];
	endContent?: React.ReactNode | React.ReactNode[];
	error?: string;
	touched?: boolean;
	isErrorText?: boolean;
	disabled?: boolean;
	pattern?: PatternInputProps;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	placeholder?: string;
	name?: string;
	value: string;
};
