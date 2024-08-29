import { useAccodionContext } from "./hooks/use-accordion";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useMemo } from "react";
import { AccordionHeader } from "./accordion-header";
import { AccordionBody } from "./accordion.body";
import {
	AccordionItemClassNameProps,
	AccordionItemProps,
} from "./interface/accordion.interface";

const initialClass: AccordionItemClassNameProps = {
	item: "",
	header: "",
	body: "",
};

export const AccordionItem = ({
	children,
	contentHeader,
	title,
	keyCurrent,
	onClick,
	className = initialClass,
}: AccordionItemProps) => {
	const { disabledKeys, activeKeys, multiple, color, radius } =
		useAccodionContext();

	const borderClass = clsx({
		"border-primary-500": color === "primary",
		"border-secondary-500": color === "secondary",
		"border-neutral-200": color === "default",
	});

	const radiusClass = clsx({
		"rounded-sm": radius === "xs",
		rounded: radius === "sm",
		"rounded-md": radius === "md",
		"rounded-lg": radius === "lg",
	});

	const isDisabled = useMemo(() => {
		if (Array.isArray(disabledKeys))
			return disabledKeys.some((el) => el === keyCurrent);

		return false;
	}, [disabledKeys, keyCurrent]);

	const active = useMemo(() => {
		if (!activeKeys) return false;
		return activeKeys.some((el) => el === keyCurrent);
	}, [activeKeys, keyCurrent]);

	const handleClick = () => {
		if (isDisabled) return;

		if (!activeKeys) return;

		let resultKeys = [...activeKeys] as string[];

		if (activeKeys.includes(keyCurrent)) {
			resultKeys = activeKeys.filter((el) => el !== keyCurrent);
		} else {
			if (multiple) resultKeys.push(keyCurrent);
			else resultKeys = [keyCurrent];
		}

		onClick && onClick(resultKeys);
	};

	return (
		<div
			onClick={handleClick}
			className={twMerge(
				"border bg-white ",
				borderClass,
				radiusClass,
				className.item
			)}
		>
			<AccordionHeader
				className={className.header}
				title={title}
				active={active}
			>
				{contentHeader}
			</AccordionHeader>

			<AccordionBody className={className.body} active={active}>
				{children}
			</AccordionBody>
		</div>
	);
};
