import { useCallback, useState } from "react";
import {
	PaginationHookProps,
	UsePaginationProps,
} from "../interface/pagination.interface";
import { PaginationSetValueProps } from "../interface/pagination-share.interface";

export const usePagination = ({
	initialPage = 1,
	initialLimit = 20,
}: UsePaginationProps): PaginationHookProps => {
	const [pageCurrent, setPageCurrent] = useState<number>(initialPage);
	const [limitCurrent, setLimitCurrent] = useState<number>(initialLimit);

	const handleSetPagination = useCallback(
		({ page, limit }: PaginationSetValueProps) => {
			if (page !== pageCurrent) setPageCurrent(page);
			if (limit !== limitCurrent) setLimitCurrent(limit);
		},
		[limitCurrent, pageCurrent]
	);

	return {
		handleSetPagination,
		page: pageCurrent,
		limit: limitCurrent,
	};
};
