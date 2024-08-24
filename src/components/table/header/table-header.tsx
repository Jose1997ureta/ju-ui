import { twMerge } from "tailwind-merge";
import { TableHeaderProps } from "../interface/table.interface";
import React, { ReactElement, isValidElement } from "react";

export const TableHeader = ({
	children,
	className,
	...props
}: TableHeaderProps) => {
	return (
		<thead
			className={twMerge(
				"min-h-[100px] divide-y-[3px] divide-white bg-white",
				className
			)}
		>
			{React.Children.map(children, (child) =>
				isValidElement(child)
					? React.cloneElement(child as ReactElement, {
							...props,
							// dataHeader,
						})
					: child
			)}

			{/* {children} */}
		</thead>
	);
};
