import { useCallback, useState } from "react";
import {
	HookModalProps,
	HookInitialValueModalProps,
	UpdateModalProps,
} from "../interface/modal-share.interface";

const initialValues: HookInitialValueModalProps<null> = {
	show: false,
	hidden: false,
	params: null,
};

export const useModal = <T,>(): HookModalProps<T> => {
	const [modal, setModal] = useState<HookInitialValueModalProps<T>>(
		initialValues as HookInitialValueModalProps<T>
	);

	const showModal = useCallback((parameter?: T) => {
		setModal({
			show: true,
			hidden: false,
			params: parameter,
		});
	}, []);

	const updateModal = useCallback((paramater: UpdateModalProps<T>) => {
		setModal((state) => {
			return {
				...state,
				...paramater,
			};
		});
	}, []);

	const closeModal = useCallback(() => {
		setModal(initialValues as HookInitialValueModalProps<T>);
	}, []);

	return {
		modal,
		showModal,
		updateModal,
		closeModal,
	};
};
