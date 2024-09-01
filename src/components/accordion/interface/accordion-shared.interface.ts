export type AccordionStatusProps = "open" | "close";

export interface AccordionItemOnClick {
	items: string[];
	item: string;
	state: AccordionStatusProps;
}
