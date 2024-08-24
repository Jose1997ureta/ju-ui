import { twMerge } from "tailwind-merge";
import { ModalFooterProps } from "../interface/modal.interface";

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
	return <div className={twMerge("px-4 pb-4", className)}>{children}</div>;
};
