import React from "react";
import { Input, LabelForm, TextArea, Select } from "..";
import { twMerge } from "tailwind-merge";
import { FormItemContext } from "./context/form-item.context";
import {
	FormItemHOCContainerProps,
	FormItemHOCProps,
} from "./interface/form-item.interface";

const FormItemHOC = ({ children, className, ...props }: FormItemHOCProps) => {
	const classForm = twMerge("w-full", className);

	return (
		<FormItemContext.Provider value={props}>
			<div className={classForm}>
				{React.Children.map(children, (child: any) => {
					if (
						(child && typeof child.type === "function") ||
						(typeof child.type !== "string" &&
							typeof child.type !== "undefined")
					) {
						return React.cloneElement(child, { ...props });
					}
					return child;
				})}
			</div>
		</FormItemContext.Provider>
	);
};

export const FormItem: FormItemHOCContainerProps = Object.assign(FormItemHOC, {
	Label: LabelForm,
	Input,
	TextArea,
	Select,
});
