import { GoCircleSlash } from "react-icons/go";
import { NoticeProps, components } from "react-select";

export const CustomNoOptionsMessage = (props: NoticeProps<any>) => {
	return (
		<components.NoOptionsMessage
			{...props}
			className="h-16 flex justify-center items-center"
		>
			<GoCircleSlash className="w-6 h-6 text-text-700" />
		</components.NoOptionsMessage>
	);
};
