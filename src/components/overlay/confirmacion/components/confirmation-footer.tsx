import { Button } from "@/components/button/button";

import { twMerge } from "tailwind-merge";
import {
	ConfirmationFooterProps,
	OptionFooterProps,
} from "../interface/confirmation.interface";

const initialValues: OptionFooterProps = {
	cancel: {
		show: true,
		loading: false,
		text: "Cancelar",
		onCancel: () => {},
		color: "neutral",
		variant: "outline",
	},
	accept: {
		show: true,
		loading: false,
		text: "Aceptar",
		onAccept: () => {},
		color: "secondary",
		variant: "solid",
	},
};

export const ConfirmationFooter = ({
	children,
	className,
	options = initialValues,
}: ConfirmationFooterProps) => {
	const option = {
		cancel: {
			...initialValues.cancel,
			...options.cancel,
		},
		accept: {
			...initialValues.accept,
			...options.accept,
		},
	};

	return (
		<div className={twMerge("p-4 sm:pt-3", className)}>
			{children || (
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
					{option.cancel.show ? (
						<Button
							color={option.cancel.color}
							variant={option.cancel.variant}
							loading={option.cancel.loading}
							disabled={option.cancel.loading}
							onClick={option.cancel.onCancel}
							className="w-full sm:w-fit max-sm:justify-center"
						>
							{option.cancel.text}
						</Button>
					) : null}
					{option.accept.show ? (
						<Button
							color={option.accept.color}
							variant={option.accept.variant}
							loading={option.accept.loading}
							disabled={option.accept.loading}
							onClick={option.accept.onAccept}
							className="w-full sm:w-fit max-sm:justify-center"
						>
							{option.accept.text}
						</Button>
					) : null}
				</div>
			)}
		</div>
	);
};
