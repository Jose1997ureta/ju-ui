import { ColorProps, ExcludeType } from "@/interfaces";
import { ReactNode } from "react";
import { PaginationValueProps } from "./pagination-share.interface";

export interface PaginationProps
	extends Partial<Omit<PaginationValueProps, "total">>,
		Pick<PaginationValueProps, "total"> {
	className?: string;
	color?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
	onChange?: (value: Pick<PaginationValueProps, "page" | "limit">) => void;

	isLimitSelect?: boolean;
	dataLimit?: number[];
}

export interface PaginationItemProps {
	className?: string;
	color?:
		| ExcludeType<ColorProps, "success" | "warning" | "danger">
		| "default";
	active?: boolean;
	children?: ReactNode;
	text?: string | number;

	onClick: () => void;
}

export interface UsePaginationProps {
	initialPage?: number;
	initialLimit?: number;
}

export interface PaginationHookProps
	extends Pick<PaginationValueProps, "page" | "limit"> {
	handleSetPagination: (
		parameter: Pick<PaginationValueProps, "page" | "limit">
	) => void;
}
