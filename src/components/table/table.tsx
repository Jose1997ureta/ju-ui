import { TableHeader } from "./header/table-header";
import { TableHeaderColumn } from "./header/table-header-column";
import { twMerge } from "tailwind-merge";
import { TableBody } from "./body/table-body";
import { TableBodyRow } from "./body/table-body-row";
import { TableBodyColumn } from "./body/table-body-column";
import { TableContext } from "./context/table.context";
import { TableHeaderRow } from "./header/table-header-row";
import { TableSearchRow } from "./search/table-search-row";
import { TableSearchColumn } from "./search/table-search-column";
import {
	TableHOCContainerProps,
	TableProps,
} from "./interface/table.interface";
import React, { ReactElement, isValidElement } from "react";

export const TableHOC = ({
	className,
	children,
	classNameContainer,
	...props
}: TableProps) => {
	const {
		theme = "secondary",
		disabledKeys,
		isCheck = true,
		selectkeys = [],
		isAction = true,
		widthAction = 100,
		dataHeader,
	} = props;

	return (
		<TableContext.Provider
			value={{
				theme,
				disabledKeys,
				isCheck,
				selectkeys,
				isAction,
				widthAction,
				totalColumn: dataHeader?.length || 0,
			}}
		>
			<div
				className={twMerge(
					"max-w-full overflow-x-auto overflow-y-auto",
					classNameContainer
				)}
			>
				<table
					className={twMerge(
						"w-full border-collapse table-auto divide-y-4 divide-white",
						className
					)}
				>
					{React.Children.map(children, (child) =>
						isValidElement(child)
							? React.cloneElement(child as ReactElement, {
									...props,
								})
							: child
					)}
					{/* {children} */}
				</table>
			</div>
		</TableContext.Provider>
	);
};

export const Table: TableHOCContainerProps = Object.assign(TableHOC, {
	Header: TableHeader,

	HeaderRow: TableHeaderRow,
	HeaderColumn: TableHeaderColumn,

	SearchRow: TableSearchRow,
	SearchColumn: TableSearchColumn,

	Body: TableBody,

	BodyRow: TableBodyRow,
	BodyColumn: TableBodyColumn,
});
