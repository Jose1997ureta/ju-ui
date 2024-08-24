import { FC_ValidatePatternInput } from "@/functions";
import { InputProps, components } from "react-select";

export const CustomInput = (props: InputProps) => {
	const { pattern } = props.selectProps as any;
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!FC_ValidatePatternInput(pattern, e.key)) {
			e.preventDefault();
		}
	};
	return <components.Input {...props} onKeyDown={handleKeyDown} />;
};
