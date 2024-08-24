import React, { ReactElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { TabItem } from "./tab-item";
import clsx from "clsx";
import { TabContext } from "./context/tab.context";
import {
	TabHOCContainerProps,
	TabProps,
	TabShareProps,
} from "./interface/tab.interface";

export const TabHOC = ({
	children,
	className,
	data = [],

	...props
}: TabProps) => {
	const {
		disabledKeys = [],
		activeKey = "",
		variant = "solid",
		color = "secondary",
	} = props;

	const variantClass = clsx({
		"p-1 bg-neutral-100 rounded": variant === "solid",
	});

	return (
		<TabContext.Provider value={{ activeKey, color, disabledKeys, variant }}>
			<div className={twMerge(variantClass, className)}>
				{typeof children === "function"
					? data.map((el, index) => {
							const child = children({ item: el });
							return isValidElement(child)
								? React.cloneElement(
										child as ReactElement<TabShareProps>,
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
										child as ReactElement<TabShareProps>,
										{
											...props,
										}
									)
								: child
						)}
			</div>
		</TabContext.Provider>
	);
};

export const Tab: TabHOCContainerProps = Object.assign(TabHOC, {
	Item: TabItem,
});
