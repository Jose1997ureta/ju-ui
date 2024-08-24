import { createContext } from "react";
import { TabShareProps } from "../interface/tab.interface";

const initialValues: TabShareProps = {
	disabledKeys: [],
	activeKey: "",
	variant: "solid",
	color: "secondary",
};

export const TabContext = createContext<TabShareProps>(initialValues);
