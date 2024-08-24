import { twMerge } from "tailwind-merge";
import { useTableContext } from "../hook/use-table-context";
import { CheckBox } from "../../form";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { TableBodyRowProps } from "../interface/table.interface";

export const TableBodyRow = ({
	children,
	className,
	keyCurrent,
	onChangeCheck,
}: TableBodyRowProps) => {
	const uui = uuidv4();
	const { isCheck, selectkeys, disabledKeys, theme } = useTableContext();
	const [check, setCheck] = useState<boolean>(false);
	const [disabledCheck, setDisabledCheck] = useState<boolean>(false);

	useEffect(() => {
		if (Array.isArray(selectkeys)) {
			const result = selectkeys.some((el) => el.id === keyCurrent.id);

			setCheck(result);
		}
	}, [keyCurrent.id, selectkeys]);

	useEffect(() => {
		if (Array.isArray(disabledKeys)) {
			const result = disabledKeys.some((el) => el === keyCurrent.id);

			setDisabledCheck(result);
		}
	}, [keyCurrent.id, disabledKeys]);

	const handleChange = (value: boolean) => {
		if (disabledCheck) return;
		onChangeCheck && onChangeCheck(keyCurrent, value);
	};

	return (
		<tr
			className={twMerge(
				"cursor-pointer relative",
				clsx(
					// disabled &&
					// 	"after:absolute after:top-0 after:left-0 after:w-full after:contents-[''] after:h-full after:bg-neutral-200 after:opacity-70",
					{
						"bg-secondary-100": theme === "secondary" && check,
						"bg-primary-100": theme === "primary" && check,
						"bg-neutral-200": theme === "neutral" && check,
						"odd:bg-neutral-100 hover:bg-neutral-100": !check,
					}
				),
				className
			)}
		>
			{isCheck ? (
				<td className="px-2 py-2.5">
					<CheckBox
						id={uui}
						onChange={handleChange}
						value={check}
						className="flex justify-center"
						disabled={disabledCheck}
						color={theme}
					/>
				</td>
			) : null}

			{children}
		</tr>
	);
};
