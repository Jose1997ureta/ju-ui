import { DropdownIndicatorProps, components } from "react-select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const CustomDropdownIndicator = (props: DropdownIndicatorProps<any>) => {
	const { selectProps } = props;

	const { menuIsOpen } = selectProps;

	return (
		<components.DropdownIndicator {...props} className="cursor-pointer">
			{menuIsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
		</components.DropdownIndicator>
	);
};
