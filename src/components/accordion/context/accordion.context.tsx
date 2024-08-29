import { createContext } from "react";
import { AccordionShareProps } from "../interface/accordion.interface";

const initialValues: AccordionShareProps = {
	disabledKeys: [],
	activeKeys: [],
	variant: "splitted",
	multiple: false,
	color: "default",
	radius: "md",
};

export const AccordionContext =
	createContext<AccordionShareProps>(initialValues);
