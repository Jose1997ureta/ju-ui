import { ReactNode } from "react";
import { ColorProps, ExcludeType } from "../../../interfaces/general.interface";

export interface AccordionShareProps {
	activeKeys?: string[];
	variant?: "splitted" | "solid";
	disabledKeys?: string[];
	multiple?: boolean;
	color?:
		| ExcludeType<ColorProps, "neutral" | "success" | "warning" | "danger">
		| "default";
}

export interface AccordionProps extends AccordionShareProps {
	data?: any[];
	children: (({ item }: { item: any }) => ReactNode) | ReactNode;
	className?: string;
}

export interface AccordionItemProps {
	children: React.ReactNode;
	keyCurrent: string;
	onClick?: (key: string[]) => void;
	className?: string;

	title?: string;
	classNameHeader?: string;
	contentHeader?: ReactNode;

	classNameContent?: string;
}

export interface AccordionHOCContainerProps {
	({
		children,
		className,
		data,
		variant,
		...props
	}: AccordionProps): JSX.Element;

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
