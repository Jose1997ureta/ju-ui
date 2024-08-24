import React, { ReactElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { useTableContext } from "../hook/use-table-context";
import { CheckBox } from "../../form";
import { v4 as uuidv4 } from "uuid";
import { TableHeaderColumn } from "./table-header-column";
import {
	TableHeaderRowProps,
	TableShareProps,
} from "../interface/table.interface";

export const TableHeaderRow = ({
	children,
	className,
	dataHeader = [],
	valueCheck = false,
	disabledCheck,
	onChangeCheck,
	...props
}: TableHeaderRowProps) => {
	const uui = uuidv4();
	const { isCheck, widthAction, isAction, theme } = useTableContext();

	const handleChange = (value: boolean) => {
		if (disabledCheck) return;
		onChangeCheck && onChangeCheck(value);
	};

	return (
		<tr
			className={twMerge(
				"bg-white divide-x-[3px] divide-white h-[38px]",
				className
			)}
		>
			{isCheck ? (
				<TableHeaderColumn
					className="min-w-[40px] w-[40px] rounded-none"
					color="default"
				>
					<CheckBox
						id={uui}
						onChange={handleChange}
						value={valueCheck}
						className="flex justify-center"
						color={theme}
					/>
				</TableHeaderColumn>
			) : null}

			{typeof children === "function"
				? dataHeader.map((el, index) => {
						const child = children({ item: el });
						return isValidElement(child)
							? React.cloneElement(
									child as ReactElement<TableShareProps>,
									{
										key: index,
										...props,
									}
								)
							: null;
					})
				: React.Children.map(children, (child) =>
						isValidElement(child)
							? React.cloneElement(
									child as ReactElement<TableShareProps>,
									{
										...props,
									}
								)
							: child
					)}

			{isAction ? (
				<TableHeaderColumn
					className={`min-w-[${widthAction}px] w-[${widthAction}px] rounded-none`}
					color="default"
				/>
			) : null}
		</tr>
	);
};
