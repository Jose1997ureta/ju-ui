import { useContext } from "react";
import { TabContext } from "../context/tab.context";

export const useTabContext = () => {
	return useContext(TabContext);
};
