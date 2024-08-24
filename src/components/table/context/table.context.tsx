import { createContext } from "react";
import { TableContextProps } from "../interface/table.interface";

const initialValues: TableContextProps = {
	theme: "secondary",
	disabledKeys: [],
	isCheck: true,
	selectkeys: [],
	isAction: true,
	widthAction: 100,
	totalColumn: 0,
};

export const TableContext = createContext<TableContextProps>(initialValues);
