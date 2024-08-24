import { cn } from "@/functions";

import { VariantProps, cva } from "class-variance-authority";
import { useEffect, useState } from "react";

import { Popover, ArrowContainer } from "react-tiny-popover";
import { PopOverComponentProps } from "./interface/popover.interface";

const PopOverClassProps = cva(["shadow-base"], {
	variants: {
		bg: {
			primary: "bg-primary-700",
			secondary: "bg-secondary-700",
			neutral: "bg-neutral-700",
			success: "bg-success-700",
			danger: "bg-danger-700",
			warning: "bg-warning-700",
			white: "bg-white",
		},
	},
	defaultVariants: {
		bg: "primary",
	},
});

export type PopOverProps = VariantProps<typeof PopOverClassProps> &
	PopOverComponentProps;

export const PopOver = ({
	isArrow = true,
	content,
	children,
	isShow = false,
	onClickOutside,
	tooltipStyle,
	tooltipClassName,
	containerStyle,
	containerClassName,
	positions = ["top"],
	align,
	reposition = true,
	ref,
	arrowConfiguration,
	bg = "white",
}: PopOverProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsOpen(isShow);
	}, [isShow]);

	let colorArrow = "#fff";

	switch (bg) {
		case "primary":
			colorArrow = "var(--colors-primary-700)";
			break;
		case "secondary":
			colorArrow = "var(--colors-secondary-700)";
			break;
		case "neutral":
			colorArrow = "var(--colors-neutral-700)";
			break;
		case "success":
			colorArrow = "var(--colors-success-700)";
			break;
		case "danger":
			colorArrow = "var(--colors-danger-700)";
			break;
		case "warning":
			colorArrow = "var(--colors-warning-700)";
			break;
		default:
			colorArrow = "var(--colors-white)";
			break;
	}

	const arrowConfig = {
		arrowColor: colorArrow,
		arrowSize: 6,
		// arrowStyle: { opacity: 1 },
		zIndex: "99",
		...arrowConfiguration,
	};

	return (
		<Popover
			reposition={reposition}
			isOpen={isOpen}
			onClickOutside={onClickOutside}
			positions={positions}
			align={align}
			ref={ref}
			containerStyle={containerStyle}
			containerClassName={containerClassName}
			content={({ position, childRect, popoverRect }) =>
				isArrow ? (
					<ArrowContainer
						position={position}
						childRect={childRect}
						popoverRect={popoverRect}
						className="mb-1"
						arrowClassName="mb-1"
						{...arrowConfig}
					>
						<div
							className={cn(
								PopOverClassProps({
									bg,
								}),
								tooltipClassName
							)}
							style={tooltipStyle}
						>
							{content}
						</div>
					</ArrowContainer>
				) : (
					<div
						className={cn(
							PopOverClassProps({
								bg,
							}),
							tooltipClassName,
							"mb-2"
						)}
						style={tooltipStyle}
					>
						{content}
					</div>
				)
			}
		>
			{children}
		</Popover>
	);
};
