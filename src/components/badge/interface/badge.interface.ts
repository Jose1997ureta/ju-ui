import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";
import { ReactNode } from "react";

export type BadgeComponentProps = {
	children: ReactNode;
	content: ReactNode;
	color?: IncludeType<ColorProps, ["white"]>;
	size?: ExcludeType<SizeProps, "xs">;
	position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
	showOutline?: boolean;
	isShow?: boolean;
	className?: string;
	classNameContainer?: string;
};
