export interface PaginationValueProps {
	total: number;
	limit: number;
	page: number;
	siblings: number;
}

export interface PaginationSetValueProps
	extends Pick<PaginationValueProps, "page" | "limit"> {}
