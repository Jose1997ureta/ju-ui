import { OptionProps, components } from "react-select";
import { CheckBox } from "../../checkbox/checkbox";

export const CustomOption = (props: OptionProps<any>) => {
	const { label, data, isMulti, isSelected } = props;
	const { childrenOption, color } = props.selectProps as any;

	const handleChange = () => {};

	return (
		<components.Option {...props}>
			{childrenOption ? (
				childrenOption({
					data,
					isSelected,
				})
			) : isMulti ? (
				<div className="flex items-center gap-2">
					<CheckBox
						id={data.id}
						onChange={handleChange}
						value={isSelected}
						color={color}
						size="sm"
					/>
					<p className="text-sm">{label}</p>
				</div>
			) : (
				<p className="text-sm">{label}</p>
			)}
		</components.Option>
	);
};
