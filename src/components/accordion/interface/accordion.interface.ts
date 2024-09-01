import { ReactNode } from "react";
import {
	ColorProps,
	ExcludeType,
	SizeProps,
} from "../../../interfaces/general.interface";
import { AccordionItemOnClick } from "./accordion-shared.interface";

export interface AccordionShareProps {
	activeKeys?: string[];
	variant?: "splitted" | "solid";
	disabledKeys?: string[];
	multiple?: boolean;
	color?:
		| ExcludeType<ColorProps, "neutral" | "success" | "warning" | "danger">
		| "default";
	radius?: SizeProps;
}

export interface AccordionProps extends AccordionShareProps {
	data?: any[];
	children: (({ item }: { item: any }) => ReactNode) | ReactNode;
	className?: string;
}

export interface AccordionItemClassNameProps {
	item?: string;
	header?: string;
	body?: string;
}

export interface AccordionItemProps {
	children: React.ReactNode;
	keyCurrent: string;
	onClick?: ({ item, items, state }: AccordionItemOnClick) => void;
	title?: string;
	contentHeader?: ReactNode;
	className?: AccordionItemClassNameProps;
}

export interface AccordionHOCContainerProps {
	({ children, className, data, ...props }: AccordionProps): JSX.Element;

	Item: ({
		children,
		keyCurrent,
		className,
		onClick,
	}: AccordionItemProps) => JSX.Element;
}

export interface AccordionHeaderProps {
	title?: string;
	active: boolean;
	className?: string;
	children?: ReactNode;
}

export interface AccordionBodyProps {
	active: boolean;
	className?: string;
	children: ReactNode;
}
