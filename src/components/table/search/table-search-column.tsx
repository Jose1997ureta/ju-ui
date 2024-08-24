import { twMerge } from "tailwind-merge";
import { TableSearchColumnProps } from "../interface/table.interface";

export const TableSearchColumn = ({
	children,
	className,
}: TableSearchColumnProps) => {
	return (
		<th
			className={twMerge(
				"sticky top-[38px] min-w-[160px] z-10 px-0.5 bg-primary-100 font-normal",
				className
			)}
		>
			{children}
		</th>
	);
};
