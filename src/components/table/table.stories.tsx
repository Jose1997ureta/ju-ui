import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import { Input, Toggle } from "../form";
import { FaPenAlt, FaSearchDollar, FaTrash } from "react-icons/fa";

import { useTable } from "./hook/use-table";
import { useEffect, useMemo, useState } from "react";
import { TableKeyCurrent } from "./interface/table-share.interface";

import DATA from "@/constant/MOCK_DATA.json";
import DATA_HEADER from "@/constant/MOCK_DATA_HEADER.json";
import { Pagination, PaginationSetValueProps } from "../pagination";
import { usePagination } from "../pagination/hook/use-pagination";

const meta: Meta<typeof Table> = {
	title: "Components/Table",
	component: Table,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table>;

const dataLimit = [10, 20, 50, 100, 200];

export const Default: Story = {
	args: {},
	render: function Render() {
		const {
			selectkeys,
			disabledKeys,
			valueSearch,
			handleSelectKey,
			handleSelectKeys,
			handleSetValueSearch,
		} = useTable({
			initialDisabledKeys: ["1", "4", "5"],
		});
		const { handleSetPagination, page, limit } = usePagination({});
		const [data, setData] = useState<any[]>([]);
		const [dataAll, setDataAll] = useState<any[]>([]);
		const [loading, setLoading] = useState<boolean>(false);

		useEffect(() => {
			setLoading(true);
			const time = setTimeout(() => {
				setData(DATA);
				setDataAll(DATA);
				setLoading(false);
			}, 1000);

			return () => {
				clearTimeout(time);
			};
		}, []);

		useEffect(() => {
			const filteredData = dataAll.filter((item: any) => {
				return Object.keys(valueSearch).every((key) => {
					return (
						item[key] &&
						item[key]
							.toString()
							.toLowerCase()
							.includes(valueSearch[key].toString().toLowerCase())
					);
				});
			});

			setData(filteredData);
		}, [dataAll, valueSearch]);

		const handleCheckRow = (key: TableKeyCurrent) => {
			handleSelectKey(key);
		};

		const handleCheckAll = (value: boolean) => {
			if (value === false) return handleSelectKeys([]);
			const result: TableKeyCurrent[] = dataFormate.map((el) => {
				return {
					id: el.id.toString(),
					name: el.name,
				};
			});

			handleSelectKeys(result);
		};

		const dataFormate = useMemo(() => {
			return dataAll.filter((el) => {
				return !disabledKeys.some((d) => el.id.toString() === d);
			});
		}, [dataAll, disabledKeys]);

		const handleChangeInput = (key: string, value: string) => {
			handleSetValueSearch(key, value);
			handleSetPagination({ page: 1, limit });
		};

		const handleChangePagination = (value: PaginationSetValueProps) => {
			handleSetPagination(value);
		};

		const indexOfLastElement = page * limit;
		const indexOfFirstElement = indexOfLastElement - limit;
		const currentElements = data.slice(
			indexOfFirstElement,
			indexOfLastElement
		);

		return (
			<div className="border p-4" style={{ width: 900 }}>
				<Table
					classNameContainer="max-h-[500px]"
					selectkeys={selectkeys}
					disabledKeys={disabledKeys}
					dataHeader={DATA_HEADER}
					theme="secondary"
				>
					<Table.Header>
						<Table.HeaderRow
							onChangeCheck={handleCheckAll}
							valueCheck={dataFormate.length === selectkeys.length}
						>
							{({ item }) => (
								<Table.HeaderColumn
									text={item.name}
									color={
										item.id === "married" ? "secondary" : "primary"
									}
									icon={<IoSearchOutline className="h-4 w-4" />}
									className={
										item.id === "email"
											? "w-[250px] min-w-[250px]"
											: ""
									}
								/>
							)}
						</Table.HeaderRow>

						<Table.SearchRow>
							{({ item }) => (
								<Table.SearchColumn className="w-[100px] min-w-[100px]">
									<Input
										value={valueSearch[item.id] || ""}
										sizes="sm"
										onChange={(e) =>
											handleChangeInput(
												item.id.toString(),
												e.target.value
											)
										}
										endContent={
											valueSearch[item.id.toString()] ? (
												<IoCloseSharp
													className="cursor-pointer"
													onClick={() =>
														handleChangeInput(
															item.id.toString(),
															""
														)
													}
												/>
											) : null
										}
									/>
								</Table.SearchColumn>
							)}
						</Table.SearchRow>
					</Table.Header>
					<Table.Body data={currentElements} loading={loading}>
						{({ item }) => (
							<Table.BodyRow
								keyCurrent={{ id: item.id.toString(), name: item.name }}
								onChangeCheck={handleCheckRow}
							>
								<Table.BodyColumn text={item.name} />
								<Table.BodyColumn text={item.lastName} />
								<Table.BodyColumn text={item.email} />
								<Table.BodyColumn text={item.gender} />
								<Table.BodyColumn>
									<div className="flex justify-center">
										<Toggle
											id={item.id}
											value={item.married}
											onChange={() => alert()}
											color="secondary"
											sizes="sm"
										/>
									</div>
								</Table.BodyColumn>

								<Table.BodyColumn>
									<div className="flex items-center gap-x-3 justify-center">
										<FaSearchDollar className="fill-text-800 h-[14px] w-[14px]" />
										<FaPenAlt className="fill-text-800 w-[14px] h-[14px]" />
										<FaTrash className="fill-text-800 w-[14px] h-[14px]" />
									</div>
								</Table.BodyColumn>
							</Table.BodyRow>
						)}
					</Table.Body>
				</Table>
				<Pagination
					className="mt-5"
					total={data.length}
					onChange={handleChangePagination}
					page={page}
					limit={limit}
					dataLimit={dataLimit}
				/>
			</div>
		);
	},
};
