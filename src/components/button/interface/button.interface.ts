import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type ButtonComponentProps = {
	loading?: boolean;
	children: React.ReactNode | React.ReactNode[];
	size?: ExcludeType<SizeProps, "xs">;
	color?: ColorProps;
	variant?: "solid" | "outline";
	startContent?: React.ReactNode | React.ReactNode[];
	endContent?: React.ReactNode | React.ReactNode[];
	disabled?: boolean;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ButtonIconComponentProps = {
	loading?: boolean;
	children: React.ReactNode | React.ReactNode[];
	size?: SizeProps;
	radius?: IncludeType<ExcludeType<SizeProps, "xs">, ["full"]>;
	color?: IncludeType<ColorProps, ["default"]>;
	variant?: "solid" | "outline" | "light" | "hover";
	disabled?: boolean;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
