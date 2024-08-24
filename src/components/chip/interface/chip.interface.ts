import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type ChipComponentProps = {
	color?: IncludeType<ColorProps, ["white"]>;
	variant?: "solid" | "flat";
	size?: ExcludeType<SizeProps, "xs">;
	children: React.ReactNode;
	radius?: IncludeType<SizeProps, ["full"]>;
	className?: string;
	isDisabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
