import { twMerge } from "tailwind-merge";
import { ModalBodyProps } from "../interface/modal.interface";

export const ModalBody = ({ children, className }: ModalBodyProps) => {
	return <div className={twMerge("px-4 pb-4", className)}>{children}</div>;
};
