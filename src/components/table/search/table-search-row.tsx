import React, { ReactElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { useTableContext } from "../hook/use-table-context";
import { TableSearchColumn } from "./table-search-column";
import {
	TableSearchRowProps,
	TableShareProps,
} from "../interface/table.interface";

export const TableSearchRow = ({
	children,
	className,
	dataHeader = [],
	...props
}: TableSearchRowProps) => {
	const { isCheck, widthAction, isAction } = useTableContext();

	return (
		<tr className={twMerge("bg-primary-100 h-[44px]", className)}>
			{isCheck ? (
				<TableSearchColumn className="min-w-[40px] w-[40px]" />
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
				<TableSearchColumn
					className={`min-w-[${widthAction}px] w-[${widthAction}px] rounded-none`}
				/>
			) : null}
		</tr>
	);
};
