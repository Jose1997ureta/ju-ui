import { twMerge } from "tailwind-merge";
import { TableBodyColumnProps } from "../interface/table.interface";
// import clsx from "clsx";
// import { useTableContext } from "../hook/use-table-context";

export const TableBodyColumn = ({
	children,
	className,
	text,
}: TableBodyColumnProps) => {
	// const { color } = useTableContext();

	// const colorClass = clsx({
	// 	"text-primary-700": color,
	// });

	return (
		<td className={twMerge("px-2 py-2.5", className)}>
			{children || <p className="line-clamp-1 text-sm">{text}</p>}
		</td>
	);
};
