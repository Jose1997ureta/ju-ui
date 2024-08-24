import Select from "node_modules/react-select/dist/declarations/src/Select";
import { InputProps } from "../../input/input";
import { LabelProps } from "../../label/label";
import { SelectProps } from "../../select/interface/select.interface";
import { TextAreaProps } from "../../text-area/text-area";
import { GroupBase } from "react-select";

export type FormItemContextProps = {
	disabled?: boolean;
	id?: string;
};

export type FormItemHOCProps = FormItemContextProps & {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
};

export type FormItemHOCContainerProps = {
	({ children, className, ...props }: FormItemHOCProps): JSX.Element;
	Label: React.ForwardRefExoticComponent<
		LabelProps & React.RefAttributes<HTMLLabelElement>
	>;
	Input: React.ForwardRefExoticComponent<
		InputProps & React.RefAttributes<HTMLInputElement>
	>;
	TextArea: React.ForwardRefExoticComponent<
		TextAreaProps & React.RefAttributes<HTMLTextAreaElement>
	>;
	Select: React.ForwardRefExoticComponent<
		SelectProps & React.RefAttributes<Select<any, boolean, GroupBase<any>>>
	>;
	// Select: ({
	// 	name,
	// 	isMulti,
	// 	maxMenuHeight,
	// 	minMenuHeight,
	// 	placeholder,
	// 	data,
	// 	classNameContainer,
	// 	onChange,
	// 	onBlur,
	// 	childrenOption,
	// 	childrenSingleValue,
	// 	startValueContent,
	// 	color,
	// 	widthMenu,
	// 	value,
	// 	error,
	// 	touched,
	// 	disabled,
	// 	isSearchable,
	// 	isClearable,
	// }: SelectProps) => JSX.Element;
};
