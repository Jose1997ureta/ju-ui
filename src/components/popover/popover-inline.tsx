import { useEffect, useState } from "react";
import { PopOver } from "./popover";
import { twMerge } from "tailwind-merge";
import { PopOverSimpleProps } from "./interface/popover.interface";

export const PopOverInline = ({
	isArrow = true,
	textContent,
	children,
	isShow = false,
	onClickOutside,
	tooltipStyle,
	tooltipClassName,
	containerStyle,
	containerClassName,
	className,
	positions = ["top"],
	reposition = true,
	bg = "primary",
	eventOpen = "hover",
	ref,
}: PopOverSimpleProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsOpen(isShow);
	}, [isShow]);

	const handleOnMouseEnter = () => {
		if (eventOpen === "click") return;
		setIsOpen(true);
	};

	const handleOnMouseLeave = () => {
		if (eventOpen === "click") return;
		setIsOpen(false);
	};

	return (
		<PopOver
			reposition={reposition}
			isShow={isOpen}
			onClickOutside={onClickOutside}
			positions={positions}
			ref={ref}
			containerStyle={containerStyle}
			containerClassName={containerClassName}
			isArrow={isArrow}
			bg={bg}
			tooltipClassName={twMerge("p-2", tooltipClassName)}
			tooltipStyle={tooltipStyle}
			content={textContent}
		>
			<div
				className={twMerge("w-fit", className)}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
			>
				{children}
			</div>
		</PopOver>
	);
};
