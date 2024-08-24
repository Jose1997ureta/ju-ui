import { useCallback, useState } from "react";
import { TableHookProps } from "../interface/table.interface";
import {
	TableKeyCurrent,
	TableValueSearchProps,
} from "../interface/table-share.interface";

interface TableProps {
	initialSelectkey?: TableKeyCurrent[];
	initialDisabledKeys?: string[];
	initialValueSearch?: TableValueSearchProps;
}

export const useTable = ({
	initialDisabledKeys = [],
	initialSelectkey = [],
	initialValueSearch = {},
}: TableProps): TableHookProps => {
	const [selectkeys, setSelectKeys] =
		useState<TableKeyCurrent[]>(initialSelectkey);
	const [disabledKeys, setDisabledKeys] =
		useState<string[]>(initialDisabledKeys);
	const [valueSearch, setValueSearch] =
		useState<TableValueSearchProps>(initialValueSearch);

	const handleSelectKey = (value: TableKeyCurrent) => {
		const isExist = selectkeys.some((el) => el.id === value.id);

		let result = [...selectkeys] as TableKeyCurrent[];

		if (isExist) {
			result = selectkeys.filter((el) => el.id !== value.id);
		} else {
			result.push(value);
		}

		setSelectKeys(result);
	};

	const handleSelectKeys = useCallback(
		(value: TableKeyCurrent[]) => {
			if (selectkeys.length === value.length) return;
			setSelectKeys(value);
		},
		[selectkeys.length]
	);

	const handleDisabledKeys = (value: string[]) => {
		setDisabledKeys(value);
	};

	const handleSetValueSearch = (key: string, value: string) => {
		setValueSearch((prev) => {
			const newState = { ...prev };

			if (value) newState[key] = value;
			else delete newState[key];

			return newState;
		});
	};

	return {
		selectkeys,
		disabledKeys,
		valueSearch,
		handleSelectKeys,
		handleSelectKey,
		handleDisabledKeys,
		handleSetValueSearch,
	};
};
