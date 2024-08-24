import { SingleValueProps, components } from "react-select";

export const CustomSingleValue = ({
	children,
	...props
}: SingleValueProps<any>) => {
	const { data, selectProps } = props;
	const { childrenSingleValue } = selectProps as any;

	return (
		<components.SingleValue {...props}>
			{childrenSingleValue ? childrenSingleValue({ data }) : children}
		</components.SingleValue>
	);
};
