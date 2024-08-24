export interface CardProps {
	className?: string;
	children: React.ReactNode;
}

export interface CardHeaderProps {
	className?: string;
	children: React.ReactNode;
	isBorder?: boolean;
}

export interface CardBodyProps {
	className?: string;
	children: React.ReactNode;
}

export interface CardFooterProps {
	className?: string;
	children?: React.ReactNode;
	isBorder?: boolean;
}
