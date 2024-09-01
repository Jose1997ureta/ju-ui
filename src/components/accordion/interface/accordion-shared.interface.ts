export type AccordionStatusProps = "open" | "close";

export interface AccordionItemOnClick {
	keys: string[];
	key: string;
	state: AccordionStatusProps;
}
