import { PaginationValueProps } from "../interface/pagination-share.interface";

export const FormatPagePagination = ({
	page,
	total,
	siblings = 1,
}: PaginationValueProps) => {
	const totalPageNoInArray = 7 + siblings;

	if (totalPageNoInArray >= total) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}

	const leftSiblingsIndex = Math.max(page - siblings, 1);
	const rightSiblingsIndex = Math.min(page + siblings, total);

	const showLeftDots = leftSiblingsIndex > 2;
	const showRightDots = rightSiblingsIndex < total - 2;

	if (!showLeftDots && showRightDots) {
		const leftItemsCount = 3 + 2 * siblings;
		const leftRange = Array.from({ length: leftItemsCount }, (_, i) => i + 1);
		return [...leftRange, "...", total];
	} else if (showLeftDots && !showRightDots) {
		const rightItemsCount = 3 + 2 * siblings;
		const rightRange = Array.from(
			{ length: rightItemsCount },
			(_, i) => total - rightItemsCount + i + 1
		);
		return [1, "...", ...rightRange];
	} else {
		const middleRange = Array.from(
			{ length: rightSiblingsIndex - leftSiblingsIndex + 1 },
			(_, i) => leftSiblingsIndex + i
		);
		return [1, "...", ...middleRange, "...", total];
	}
};

export const FormatLimitPagination = (data: number[]) => {
	return data.map((el) => {
		return {
			id: el,
			name: `${el}/páginas`,
		};
	});
};
