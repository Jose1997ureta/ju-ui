import { ColorProps, ExcludeType } from "@/interfaces";
import { ReactNode } from "react";
import {
	TableKeyCurrent,
	TableValueSearchProps,
} from "./table-share.interface";

export interface TableHookProps {
	selectkeys: TableKeyCurrent[];
	disabledKeys: string[];
	valueSearch: TableValueSearchProps;
	handleSelectKey: (parameter: TableKeyCurrent) => void;
	handleSelectKeys: (parameter: TableKeyCurrent[]) => void;
	handleDisabledKeys: (parameter: string[]) => void;
	handleSetValueSearch: (key: string, value: string) => void;
}
export interface TableShareProps {
	theme?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
	isCheck?: boolean;
	selectkeys?: TableKeyCurrent[];
	disabledKeys?: string[];
	isAction?: boolean;
	widthAction?: number;
}

export interface TableContextProps extends TableShareProps {
	totalColumn?: number;
}
export interface TableProps extends TableShareProps {
	classNameContainer?: string;
	className?: string;
	children: ReactNode;
	spacing?: number;
	dataHeader?: any[];
}

export interface TableHeaderProps {
	children: ReactNode;
	className?: string;
	dataHeader?: any[];
}
export interface TableHeaderRowProps {
	dataHeader?: any[];
	children: (({ item }: { item: any }) => ReactNode) | ReactNode;
	className?: string;
	valueCheck?: boolean;
	onChangeCheck?: (value: boolean) => void;
	disabledCheck?: boolean;
}
export interface TableHeaderColumnProps {
	className?: string;
	children?: ReactNode;
	color?:
		| ExcludeType<ColorProps, "success" | "warning" | "danger">
		| "default";
	icon?: ReactNode;
	text?: string;
}
export interface TableSearchRowProps {
	dataHeader?: any[];
	children: (({ item }: { item: any }) => ReactNode) | ReactNode;
	className?: string;
}

export interface TableSearchColumnProps {
	className?: string;
	children?: ReactNode;
}

export interface TableBodyProps {
	data: any[];
	children: (({ item }: { item: any }) => ReactNode) | ReactNode;
	className?: string;
	textNoData?: string;
	loading?: boolean;
	loadingText?: string;
}

export interface TableBodyRowProps {
	className?: string;
	children: ReactNode;
	keyCurrent: TableKeyCurrent;
	onChangeCheck?: (keyCurrent: TableKeyCurrent, value: boolean) => void;
}
export interface TableBodyColumnProps {
	className?: string;
	text?: string;
	children?: ReactNode;
}

export interface TableHOCContainerProps {
	({ children, className, dataHeader, ...props }: TableProps): JSX.Element;

	Header: ({ children, className }: TableHeaderProps) => JSX.Element;
	HeaderRow: ({
		children,
		className,
		dataHeader,
		valueCheck,
		disabledCheck,
		onChangeCheck,
	}: TableHeaderRowProps) => JSX.Element;
	HeaderColumn: ({
		children,
		className,
		color,
		icon,
		text,
	}: TableHeaderColumnProps) => JSX.Element;
	SearchRow: ({
		children,
		className,
		dataHeader,
	}: TableSearchRowProps) => JSX.Element;
	SearchColumn: ({
		children,
		className,
	}: TableSearchColumnProps) => JSX.Element;
	Body: ({
		children,
		className,
		data,
		textNoData,
		loading,
		loadingText,
	}: TableBodyProps) => JSX.Element;
	BodyRow: ({
		children,
		className,
		keyCurrent,
	}: TableBodyRowProps) => JSX.Element;
	BodyColumn: ({
		children,
		className,
		text,
	}: TableBodyColumnProps) => JSX.Element;
}
