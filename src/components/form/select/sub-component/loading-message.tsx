import { NoticeProps } from "react-select";
import { LuLoader2 } from "react-icons/lu";

export const CustomLoadingMessage = (props: NoticeProps<any>) => {
	return (
		<div {...props} className="h-16 flex justify-center items-center">
			<LuLoader2 className="animate-spin fill-transparent w-6 h-6 text-text-700" />
		</div>
	);
};
