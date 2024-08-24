import { useContext } from "react";
import { TableContext } from "../context/table.context";

export const useTableContext = () => {
	return useContext(TableContext);
};
