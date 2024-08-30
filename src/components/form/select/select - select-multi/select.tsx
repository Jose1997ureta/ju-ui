import { forwardRef, useEffect, useState } from "react";
import { ActionMeta, SingleValue } from "react-select";
import SelectLibrary from "react-select";
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
import { SelectProps } from "../interface/select.interface";
import { ActionChangeProps } from "../interface/select-share.interface";
import { CustomInput } from "../sub-component/input-select";

export const Select = forwardRef(
	(
		{
			name,
			isMulti = false,
			maxMenuHeight = 200,
			minMenuHeight,
			placeholder = "Select",
			data = [],
			classNameContainer,
			onChange,
			onBlur,
			childrenOption,
			childrenSingleValue,
			startValueContent,
			color = "secondary",
			widthMenu = "100%",
			value,
			error,
			touched,
			disabled,
			size = "md",
			isLoading,
			isSearchable = true,
			isItemAll = "all",
			menuPosition = "absolute",
			isPortal = false,
			menuIsOpen,
			isClearable = true,
			pattern = "",
		}: SelectProps,
		ref: any
	) => {
		const [valueSelect, setValueSelect] = useState<any>(null);

		useEffect(() => {
			let filter = null as null | any[] | object;

			if (value) {
				if (isMulti) {
					const dataV = [] as any[];

					data.forEach((el) => {
						value.forEach((v: string) => {
							if (el.id.toString() === v.toString()) {
								dataV.push(el);
							}
						});
					});

					filter = dataV;
				} else {
					filter = data.find((el) => el.id.toString() === value.toString());
					if (filter === undefined) filter = null;
				}
			}
			setValueSelect(filter);
		}, [data, value, isMulti]);

		const handleChange = (element: SingleValue<any>, h: ActionMeta<any>) => {
			let itemAll = element as any[];
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
							itemAll = data as any[];
						else {
							const result = data.filter((el) => el.id.toString() !== "0");
							if (itemAll.length === result.length) itemAll = data as any[];
						}
					}

					item = h.option;
				} else {
					item = element;
					itemAll = [element];
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

		return (
			<div className={twMerge("relative", classNameContainer)}>
				<SelectLibrary
					ref={ref}
					menuIsOpen={menuIsOpen}
					name={name}
					isMulti={isMulti}
					isClearable={isClearable}
					className="w-full text-sm"
					classNamePrefix="react-select"
					options={data}
					isSearchable={isSearchable}
					hideSelectedOptions={false}
					closeMenuOnSelect={!isMulti}
					menuPosition={menuPosition}
					menuShouldScrollIntoView={false}
					getOptionValue={(option: any) => option.id}
					getOptionLabel={(option: any) => option.name}
					menuPortalTarget={isPortal ? document.body : undefined}
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
					// defaultValue={}
					isDisabled={disabled}
					isLoading={isLoading}
					{...{
						childrenValueStart: startValueContent,
						childrenOption: childrenOption,
						childrenSingleValue: childrenSingleValue,
						color,
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
