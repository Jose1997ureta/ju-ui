import { useContext } from "react";
import { AccordionContext } from "../context/accordion.context";

export const useAccodionContext = () => {
	return useContext(AccordionContext);
};
