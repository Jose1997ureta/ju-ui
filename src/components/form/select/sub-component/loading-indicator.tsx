import { LoadingIndicatorProps } from "react-select";
import { LuLoader2 } from "react-icons/lu";

export const CustomLoadingIndicator = (props: LoadingIndicatorProps<any>) => {
	return (
		<div {...props}>
			<LuLoader2 className="animate-spin fill-transparent text-text-700" />
		</div>
	);
};
