import React, { ReactElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

import { AccordionContext } from "./context/accordion.context";
import { AccordionItem } from "./accordion-item";
import clsx from "clsx";
import {
	AccordionHOCContainerProps,
	AccordionProps,
	AccordionShareProps,
} from "./interface/accordion.interface";

export const AccordionHOC = ({
	children,
	className,
	data = [],
	...props
}: AccordionProps) => {
	const {
		disabledKeys = [],
		activeKeys = [],
		multiple = false,
		variant = "splitted",
		color = "default",
	} = props;

	const variantClass = clsx("w-full grid grid-cols-1 gap-y-1", {
		// "grid grid-cols-1 gap-y-1": variant === "splitted",
	});

	return (
		<AccordionContext.Provider
			value={{ variant, color, disabledKeys, activeKeys, multiple }}
		>
			<div className={twMerge(variantClass, className)}>
				{typeof children === "function"
					? data.map((el, index) => {
							const child = children({ item: el });
							return isValidElement(child)
								? React.cloneElement(
										child as ReactElement<AccordionShareProps>,
										{
											key: index,

											...props,
										}
									)
								: null;
						})
					: React.Children.map(children, (child) =>
							isValidElement(child)
								? React.cloneElement(
										child as ReactElement<AccordionShareProps>,
										{
											...props,
										}
									)
								: child
						)}
			</div>
		</AccordionContext.Provider>
	);
};

export const Accordion: AccordionHOCContainerProps = Object.assign(
	AccordionHOC,
	{
		Item: AccordionItem,
	}
);
