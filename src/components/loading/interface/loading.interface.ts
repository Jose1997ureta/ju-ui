import { ColorProps, ExcludeType, SizeProps } from "@/interfaces";

export interface LoadingProps {
	color?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
	className?: string;
	classNameIcon?: string;
	size?: SizeProps;
	stroke?: "light" | "base";
}
