import { ClearIndicatorProps, components } from "react-select";
import { IoCloseSharp } from "react-icons/io5";

export const CustomClearIndicator = (props: ClearIndicatorProps<any>) => {
	return (
		<components.ClearIndicator className="cursor-pointer" {...props}>
			<IoCloseSharp />
		</components.ClearIndicator>
	);
};
