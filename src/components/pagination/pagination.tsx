import { twMerge } from "tailwind-merge";
import { IoIosArrowBack } from "react-icons/io";
import { PaginationItem } from "./pagination-item";
import { PaginationProps } from "./interface/pagination.interface";
import { FormatLimitPagination, FormatPagePagination } from "./function";
import clsx from "clsx";
import { Select } from "../form";
import { ActionChangeProps } from "..";

export const Pagination = ({
	className,
	color = "secondary",

	total,
	limit = 20,
	page = 1,
	siblings = 1,
	isLimitSelect = true,
	dataLimit = [],
	onChange,
}: PaginationProps) => {
	const totalPagination = Math.ceil(total / limit);

	const dataPageFormat = FormatPagePagination({
		limit,
		page,
		siblings,
		total: totalPagination,
	});
	const dataLimitFormat = FormatLimitPagination(dataLimit);

	const handleChange = (value: number | string | null) => {
		if (value === "...") return;
		onChange &&
			onChange({
				limit,
				page: Number(value),
			});
	};

	const handlePrev = () => {
		if (page === 1) return;

		onChange &&
			onChange({
				limit,
				page: page - 1,
			});
	};

	const handleNext = () => {
		if (page === totalPagination) return;

		onChange &&
			onChange({
				limit,
				page: page + 1,
			});
	};

	const handleChangeSelect = ({
		item,
		action,
	}: {
		item: any;
		action: ActionChangeProps;
	}) => {
		if (action === "clear") return;
		onChange &&
			onChange({
				page,
				limit: item.id,
			});
	};

	return (
		<div
			className={twMerge("flex justify-end gap-x-2 items-center", className)}
		>
			<div className="">
				<p className="text-sm text-text-900">{`Total ${total} elementos`}</p>
			</div>
			<div className="flex items-center border border-neutral-200 px-2 py-1 bg-white rounded-lg cursor-pointer">
				<PaginationItem
					className={clsx("mr-1", page === 1 && "cursor-no-drop")}
					onClick={handlePrev}
					color={page === 1 ? "default" : undefined}
				>
					<IoIosArrowBack
						className={clsx(
							"fill-text-800",
							page === 1 && "fill-text-500"
						)}
					/>
				</PaginationItem>

				{dataPageFormat.map((el, i) => (
					<PaginationItem
						key={i}
						text={el}
						active={page === el}
						color={color}
						onClick={() => handleChange(el)}
					/>
				))}

				<PaginationItem
					className={clsx(
						"ml-1",
						page === totalPagination && "cursor-no-drop"
					)}
					color={page === totalPagination ? "default" : undefined}
					onClick={handleNext}
				>
					<IoIosArrowBack
						className={clsx(
							"fill-text-800 transform rotate-180",
							page === totalPagination && "fill-text-500"
						)}
					/>
				</PaginationItem>
			</div>

			{isLimitSelect ? (
				<Select
					data={dataLimitFormat}
					onChange={handleChangeSelect}
					placeholder="0"
					isSearchable={false}
					value={limit}
					classNameContainer="w-[130px]"
					isClearable={false}
					isPortal
					menuPosition="fixed"
					size="lg"
				/>
			) : null}
		</div>
	);
};
