import { useAccodionContext } from "./hooks/use-accordion";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useMemo } from "react";
import { AccordionHeader } from "./accordion-header";
import { AccordionBody } from "./accordion.body";
import { AccordionItemProps } from "./interface/accordion.interface";

export const AccordionItem = ({
	children,
	classNameHeader,
	contentHeader,
	title,
	keyCurrent,
	className,
	classNameContent,

	onClick,
}: AccordionItemProps) => {
	const { disabledKeys, activeKeys, multiple, color } = useAccodionContext();

	const isDisabled = useMemo(() => {
		if (Array.isArray(disabledKeys))
			return disabledKeys.some((el) => el === keyCurrent);

		return false;
	}, [disabledKeys, keyCurrent]);

	const active = useMemo(() => {
		if (!activeKeys) return false;
		return activeKeys.some((el) => el === keyCurrent);
	}, [activeKeys, keyCurrent]);

	const borderClass = clsx({
		"border-primary-500": color === "primary",
		"border-secondary-500": color === "secondary",
		"border-neutral-200": color === "default",
	});

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
				"rounded-md border bg-white overflow-hidden",
				borderClass,
				className
			)}
		>
			<AccordionHeader
				className={classNameHeader}
				title={title}
				active={active}
			>
				{contentHeader}
			</AccordionHeader>

			<AccordionBody className={classNameContent} active={active}>
				{children}
			</AccordionBody>
		</div>
	);
};
