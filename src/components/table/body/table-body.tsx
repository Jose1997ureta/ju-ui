import React, { ReactElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { TableBodyProps, TableShareProps } from "../interface/table.interface";
import { useTableContext } from "../hook/use-table-context";

export const TableBody = ({
	children,
	className,
	data = [],
	textNoData = "No hay información",
	loading = false,
	loadingText = "Cargando ...",
	...props
}: TableBodyProps) => {
	const { totalColumn, isAction, isCheck } = useTableContext();

	const total = Number(totalColumn) + Number(isAction) + Number(isCheck);

	return (
		<tbody className={twMerge("", className)}>
			{typeof children === "function"
				? data.map((el, index) => {
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

			{data.length === 0 && !loading ? (
				<tr className="border-b border-text-100">
					<td
						className={twMerge("px-2 py-2.5 w-full", className)}
						colSpan={total}
					>
						<div className="flex justify-center">
							<p className="line-clamp-1 text-sm text-text-900">
								{textNoData}
							</p>
						</div>
					</td>
				</tr>
			) : null}

			{loading ? (
				<tr className="border-b border-text-100">
					<td
						className={twMerge("px-2 py-2.5 w-full", className)}
						colSpan={total}
					>
						<div className="flex justify-center relative">
							<p className="line-clamp-1 text-sm text-text-900">
								{loadingText}
							</p>
						</div>
					</td>
				</tr>
			) : null}
		</tbody>
	);
};
