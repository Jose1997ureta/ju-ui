import { twMerge } from "tailwind-merge";
import { CardProps } from "./interface/card.interface";
import { CardHeader } from "./card-header";
import { CardBody } from "./card-body";
import { CardFooter } from "./card-footer";

export const Card = ({ className, children }: CardProps) => {
	return (
		<div className={twMerge("rounded bg-white shadow-sm", className)}>
			{children}
		</div>
	);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
