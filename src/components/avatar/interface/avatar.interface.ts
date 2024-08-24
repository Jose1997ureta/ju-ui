import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type AvatarComponentProps = {
	size?: SizeProps;
	isDisabled?: boolean;
	isBorder?: boolean;
	radius?: IncludeType<ExcludeType<SizeProps, "xs">, ["full"]>;
	borderColor?: IncludeType<ColorProps, ["default"]>;
	bg?: string;

	content?: React.ReactNode;
	src?: string;
	className?: string;
	classNameContainer?: string;
	name?: string;
	isStatus?: boolean;
	status?: "active" | "pending" | "inactive";
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type AvatarGroupProps = {
	max?: number;
	total?: number;
	children: React.ReactNode | React.ReactNode[];
	renderCount?: ({ total }: { total: number }) => React.ReactNode;
};
