import { ControlProps, components } from "react-select";

export const CustomsControlStart = ({
	children,
	...props
}: ControlProps<any>) => {
	const { childrenValueStart } = props.selectProps as any;

	return (
		<components.Control {...props}>
			{childrenValueStart ? (
				<div className="pl-2">{childrenValueStart}</div>
			) : null}
			{children}
		</components.Control>
	);
};
