import { ColorProps } from "@/interfaces";
import { ReactNode } from "react";

export interface TabShareProps {
	activeKey?: string;
	variant?: "solid" | "underline";
	color?: ColorProps;
	disabledKeys?: string[];
}

export interface TabProps extends TabShareProps {
	data?: any[];
	children: (({ item }: { item: any }) => ReactNode) | ReactNode;
	className?: string;
}

export interface TabItemProps {
	children?: React.ReactNode;
	keyCurrent: string;
	onClick?: (key: string) => void;
	className?: string;
}

export interface TabHOCContainerProps {
	({ children, className, data, variant, ...props }: TabProps): JSX.Element;

	Item: ({
		children,
		keyCurrent,
		className,
		onClick,
	}: TabItemProps) => JSX.Element;
}
