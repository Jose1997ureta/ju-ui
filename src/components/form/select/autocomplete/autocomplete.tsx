import {
	ActionMeta,
	GroupBase,
	OptionsOrGroups,
	SingleValue,
} from "react-select";
import AsyncSelect from "react-select/async";
import {
	CustomClearIndicator,
	CustomDropdownIndicator,
	CustomOption,
	CustomsControlStart,
	CustomLoadingIndicator,
	CustomNoOptionsMessage,
	CustomLoadingMessage,
	CustomSingleValue,
} from "../sub-component";

import { fcSelectStyles } from "../selectTheme";
import { twMerge } from "tailwind-merge";
import { LabelErrorForm } from "../..";
import { forwardRef, useEffect, useState } from "react";
import { AutoCompleteProps } from "../interface/select.interface";
import { ActionChangeProps } from "../interface/select-share.interface";
import { CustomInput } from "../sub-component/input-select";

export const Autocomplete = forwardRef(
	(
		{
			name,
			isMulti = false,
			maxMenuHeight = 200,
			minMenuHeight,
			placeholder = "Select",
			classNameContainer,
			onChange,
			onBlur,
			childrenOption,
			childrenSingleValue,
			startValueContent,
			color = "secondary",
			widthMenu = "100%",
			value,
			defaultOptions,
			error,
			touched,
			disabled,
			loadOption,
			onMenuOpen,
			isLoading,
			size = "md",
			isItemAll = "all",
			menuPosition = "absolute",
			isPortal = false,
			menuIsOpen,
			isClearable = true,
			pattern = "",
		}: AutoCompleteProps,
		ref: any
	) => {
		const [valueSelect, setValueSelect] = useState<any>(null);
		const [dataOptions, setDataOptions] = useState<any[]>([]);
		const [dataOptionsAll, setDataOptionsAll] = useState<any[]>([]);

		useEffect(() => {
			if (Array.isArray(defaultOptions)) {
				setDataOptions(defaultOptions);
				setDataOptionsAll(defaultOptions);
			}
		}, [defaultOptions]);

		useEffect(() => {
			let filter = null as null | any[] | object;

			if (value) {
				if (isMulti) {
					const dataV = [] as any[];

					dataOptionsAll.forEach((el) => {
						value.forEach((v: string) => {
							if (el.id.toString() === v.toString()) {
								dataV.push(el);
							}
						});
					});

					filter = dataV;
				} else {
					filter = dataOptionsAll.find(
						(el) => el.id.toString() === value.toString()
					);
					if (filter === undefined) filter = null;
				}
			}

			setValueSelect(filter);
		}, [dataOptionsAll, isMulti, value]);

		const handleChange = (element: SingleValue<any>, h: ActionMeta<any>) => {
			let itemAll = element as any;
			let item = null as any;
			const action = h.action as ActionChangeProps;

			if (h.action === "clear") {
				itemAll = h.removedValues.map((el) => {
					return { ...el, id: "" };
				});

				if (isMulti) item = itemAll ?? [];
				else item = itemAll[0] ?? [];
			} else if (h.action === "select-option") {
				if (Array.isArray(itemAll) && isMulti) {
					if (isItemAll === "only") {
						const existAll = itemAll.some((el) => el.id.toString() === "0");

						if (existAll)
							itemAll = itemAll.filter((el) => el.id.toString() !== "0");

						if (h.option && h.option.id.toString() === "0")
							itemAll = [h.option];
					} else {
						if (h.option && h.option.id.toString() === "0")
							itemAll = dataOptionsAll;
						else {
							const result = dataOptionsAll.filter(
								(el) => el.id.toString() !== "0"
							);
							if (itemAll.length === result.length) itemAll = dataOptionsAll;
						}
					}

					item = h.option;
				} else {
					// if (value.toString() === element.id.toString()) {
					// 	element.id = null;

					// 	item = element;
					// 	itemAll = [element];

					// 	action = "clear";
					// } else {
					item = element;
					itemAll = [element];
					// }
				}
			} else if (
				(h.action === "deselect-option" ||
					h.action === "remove-value" ||
					h.action === "pop-value") &&
				Array.isArray(itemAll)
			) {
				/* Estos eventos solo orucren cuando el select es multiple */
				if (isItemAll === "all") {
					item = h.action === "deselect-option" ? h.option : h.removedValue;
					if (item.id.toString() === "0") itemAll = [];
					else itemAll = itemAll.filter((el) => el.id.toString() !== "0");
				}
			}

			onChange && onChange({ item, data: itemAll, action });
		};

		const handleLoadOption = async (
			inputValue: string
		): Promise<OptionsOrGroups<any, GroupBase<any>>> => {
			const result: any = await loadOption(inputValue);

			if (result.length === 0) {
				const resultGroup = dataOptionsAll.filter((el) =>
					el.name.toLowerCase().includes(inputValue.toLowerCase())
				);

				setDataOptions(resultGroup);
				return resultGroup;
			}

			if (isMulti) {
				// let isDefault = Array.isArray(defaultOptions) ? defaultOptions : [];

				const arregloConcatenado = [...dataOptionsAll, ...result];

				const valoresUnicosPorId = new Map();

				arregloConcatenado.forEach((objeto) => {
					valoresUnicosPorId.set(objeto.id, objeto);
				});

				const valoresUnicos = Array.from(valoresUnicosPorId.values());

				setDataOptions(result);
				setDataOptionsAll(valoresUnicos);

				return result;
			}

			setDataOptions(result);
			setDataOptionsAll(result);

			return result;
		};

		const handleMenuOpen = () => {
			if (typeof defaultOptions === "boolean") {
				onMenuOpen && onMenuOpen();
			}
		};

		return (
			<div className={twMerge("relative", classNameContainer)}>
				<AsyncSelect
					ref={ref}
					menuIsOpen={menuIsOpen}
					isLoading={isLoading}
					// cacheOptions
					loadOptions={handleLoadOption}
					defaultOptions={dataOptions}
					onMenuOpen={handleMenuOpen}
					name={name}
					isMulti={isMulti}
					isClearable={isClearable}
					className="w-full text-sm"
					classNamePrefix="react-select"
					hideSelectedOptions={false}
					closeMenuOnSelect={!isMulti}
					menuShouldScrollIntoView={false}
					getOptionValue={(option: any) => option.id}
					getOptionLabel={(option: any) => option.name}
					components={{
						DropdownIndicator: CustomDropdownIndicator,
						Control: CustomsControlStart,
						Option: CustomOption,
						NoOptionsMessage: CustomNoOptionsMessage,
						ClearIndicator: CustomClearIndicator,
						LoadingIndicator: CustomLoadingIndicator,
						LoadingMessage: CustomLoadingMessage,
						SingleValue: CustomSingleValue,
						Input: CustomInput,
					}}
					minMenuHeight={minMenuHeight}
					maxMenuHeight={maxMenuHeight}
					menuPosition={menuPosition}
					menuPortalTarget={isPortal ? document.body : undefined}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={onBlur}
					styles={fcSelectStyles({
						color,
						widthMenu,
						error,
						touched,
						size,
					})}
					value={valueSelect}
					isDisabled={disabled}
					{...{
						childrenValueStart: startValueContent,
						childrenOption: childrenOption,
						childrenSingleValue: childrenSingleValue,
						pattern,
					}}
				/>

				{!disabled && error && touched ? (
					<LabelErrorForm text={error.toString()} />
				) : null}
			</div>
		);
	}
);
