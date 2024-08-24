import { ColorProps } from "@/interfaces";

export type ConfirmationProps = {
	/**
	 * @description
	 * Propiedad para poder ingresar Valores Elementos
	 * @type
	 * Recibe **ReactNode** -> el campo es requerido
	 * */
	children: React.ReactNode;
	/**
	 * @description
	 * Propiedad para poder mostrar el modal
	 * @type
	 * Recibe **boolean** -> campo es requerido
	 * */
	show: boolean;
	/**
	 * @description
	 * Propiedad para dar estilo al fondo oscuro del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	classNameOverLay?: string;
	/**
	 * @description
	 * Propiedad para elegir la posicion que va aparecer el modal
	 * @type
	 * Recibe **center** | **right** | **left** -> campo no requerido
	 * @value
	 * El valor por defecto es **center**
	 * */
	className?: string;
	/**
	 * @description
	 * Propiedad para dar estilo al contenido general del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	classNameContainer?: string;
};

export interface ConfirmationFooterProps {
	children?: React.ReactNode;
	className?: string;
	options?: OptionFooterProps;
}

export interface ConfirmartionHeaderProps {
	title?: string;
	children?: React.ReactNode;
	className?: string;
	onClose?: () => void;
	isClose?: boolean;
	icon?: React.ReactNode;
}

export interface ConfirmationBodyProps {
	text?: string;
	children?: React.ReactNode;
	className?: string;
	data?: { id: string | number; name: string }[];
	isIcon?: boolean;
	isClose?: boolean;
}

/* FOOTER */

export interface OptionFooterProps {
	cancel?: {
		show?: boolean;
		loading?: boolean;
		text?: string;
		onCancel?: () => void;
		color?: ColorProps;
		variant?: "solid" | "outline";
	};
	accept?: {
		show?: boolean;
		loading?: boolean;
		text?: string;
		onAccept?: () => void;
		color?: ColorProps;
		variant?: "solid" | "outline";
	};
}

/* HOOK */
export interface HookConfirmationProps<T> {
	title: string;
	description: string;
	show: boolean;
	data?: { id: string | number; name: string }[];
	params?: T;
	loading?: boolean;
}

export interface ShowConfirmationProps<T>
	extends Omit<HookConfirmationProps<T>, "show"> {}
export interface UpdateConfirmationProps<T>
	extends Partial<HookConfirmationProps<T>> {}
