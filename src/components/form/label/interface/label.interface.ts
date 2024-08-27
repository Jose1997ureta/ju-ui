import { ExcludeType, SizeProps } from "@/interfaces";

export type LabelComponentProps = {
	/**
	 * @description
	 * Propiedad para colocar un identificador para html.
	 * @type
	 * Puede recibir **string** | **undefined**
	 */
	id?: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad para colocar el tamaño del label.
	 * @type
	 * Puede recibir **sm** | **md**  | **lg**
	 * @value
	 * El valor por defecto es **md**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	/**
	 * @description
	 * Propiedad para colocar un aserisco en el texto.
	 * @type
	 * Puede recibir **boolean**
	 */
	required?: boolean;
	/**
	 * @description
	 * Propiedad para colocar el texto.
	 * @type
	 * Puede recibir **string**
	 */
	label: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.
	 */
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad para bloquear el campo, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **boolean**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al principio el label
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 * @value
	 * El valor por defecto es **undefined**
	 */
	startContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al final el label
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 * @value
	 * El valor por defecto es **undefined**
	 */
	endContent?: React.ReactNode | React.ReactNode[];
};

export type LabelErrorProps = {
	/**
	 * @description
	 * Propiedad para colocar el texto.
	 * @type
	 * Puede recibir **string**
	 */
	text: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.
	 */
	className?: string;
};
