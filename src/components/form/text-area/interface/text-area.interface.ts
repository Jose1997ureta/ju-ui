import { ExcludeType, PatternInputProps, SizeProps } from "@/interfaces";

export type TextAreaComponentProps = {
	/**
	 * @description
	 * Propiedad para colocar un identificador para html.
	 * @type
	 * Puede recibir **string** | **undefined**
	 */
	id?: string;
	/**
	 * @description
	 * Propiedad para ingresar un nombre de identifacion
	 */
	name?: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el mismo textarea.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad para bloquear el campo el texto, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **boolean**
	 */
	disabled?: boolean;
	maxLength?: number;
	/**
	 * @description
	 * Propiedad para ingresar valores en el textarea
	 * @value
	 * El campo es requerido
	 */
	value: string;
	/**
	 * @description
	 * Propiedad para colocar el tamaño del textarea.
	 * @type
	 * Puede recibir **sm** | **md**  | **lg**
	 * @value
	 * El valor por defecto es **md**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad para mostrar un texto de error
	 * @type
	 * Puede recibir **string** -> pensado en el formik
	 */
	error?: string;
	/**
	 * @description
	 * Propiedad para pasar si el valor a hizo objecto del focus del onblur
	 * @type
	 * Puede recibir **boolean** -> pensado en el formik
	 */
	touched?: boolean;
	/**
	 * @description
	 * Propiedad para decidir si se muestra el texto de error debajo del input
	 * @type
	 * Puede recibir **boolean**
	 * @value
	 * El valor por defecto es **true**
	 */
	isErrorText?: boolean;
	isLabelCounter?: boolean;
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al principio el input
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 * @value
	 * El valor por defecto es **undefined**
	 */
	startContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad colocar el validador de texto cuando se ingrese valor en el input
	 * @type
	 * Puede recibir **""** | **number** | **decimal** | **alphabetic** | **alpha-numeric** | **numeric-space** | **numeric-comma**
	 * @value
	 * El valor por defecto es **""** y ademas el campo no es requerido
	 */
	pattern?: PatternInputProps;
	/**
	 * @description
	 * Propiedad para ingresar un texto de fondo
	 */
	placeholder?: string;
};
