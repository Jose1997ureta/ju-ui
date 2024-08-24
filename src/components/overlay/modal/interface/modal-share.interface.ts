export interface HookInitialValueModalProps<T> {
	show: boolean;
	hidden: boolean;
	params?: T;
}

// export interface ShowModalProps<T>
// 	extends Omit<HookInitialValueModalProps<T>, "show" | "hidden"> {}
export interface UpdateModalProps<T>
	extends Partial<HookInitialValueModalProps<T>> {}

export interface HookModalProps<T> {
	modal: HookInitialValueModalProps<T>;
	showModal: (parameter?: T) => void;
	updateModal: (parameter: UpdateModalProps<T>) => void;
	closeModal: () => void;
}
