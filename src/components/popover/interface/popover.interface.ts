import { ColorProps, IncludeType } from "@/interfaces";
import { PopoverAlign, PopoverPosition } from "react-tiny-popover";

export type PopOverGeneralProps = {
	isArrow?: boolean;
	children: JSX.Element;
	isShow?: boolean;
	onClickOutside?: (e: MouseEvent) => void;
	positions?: PopoverPosition[];
	reposition?: boolean;
	ref?: React.Ref<HTMLElement>;
};

export type PopOverThemeProps = {
	bg?: IncludeType<ColorProps, ["white"]>;
	tooltipStyle?: React.CSSProperties;
	tooltipClassName?: string;
	containerStyle?: Partial<CSSStyleDeclaration>;
	containerClassName?: string;
};

export type PopOverComponentProps = PopOverGeneralProps &
	PopOverThemeProps & {
		content: JSX.Element;
		align?: PopoverAlign;
		arrowConfiguration?: {
			arrowColor?: string;
			arrowSize?: number;
			arrowStyle?: React.CSSProperties;
			zIndex?: string;
		};
	};

export type PopOverSimpleProps = PopOverGeneralProps &
	PopOverThemeProps & {
		textContent: JSX.Element;
		eventOpen?: "click" | "hover";
		className?: string;
	};
