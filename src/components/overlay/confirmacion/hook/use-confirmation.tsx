import { useCallback, useState } from "react";
import {
	HookConfirmationProps,
	ShowConfirmationProps,
	UpdateConfirmationProps,
} from "../interface/confirmation.interface";

const initialValues: HookConfirmationProps<null> = {
	title: "",
	description: "",
	show: false,
	data: [],
	params: null,
	loading: false,
};

export const useConfirmation = () => {
	const [confirmation, setConfirmation] =
		useState<HookConfirmationProps<any>>(initialValues);

	const showConfirmation = useCallback(
		<T,>(parameter: ShowConfirmationProps<T>) => {
			setConfirmation({
				...parameter,
				show: true,
			});
		},
		[]
	);

	const updateConfirmation = useCallback(
		<T,>(paramater: UpdateConfirmationProps<T>) => {
			setConfirmation((state) => {
				return {
					...state,
					...paramater,
				};
			});
		},
		[]
	);

	const closeConfirmation = useCallback(() => {
		setConfirmation(initialValues);
	}, []);

	return {
		showConfirmation,
		confirmation,
		closeConfirmation,
		updateConfirmation,
	};
};
