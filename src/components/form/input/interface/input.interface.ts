import { ExcludeType, PatternInputProps, SizeProps } from "@/interfaces";

export type InputComponentProps = {
	/**
	 * @description
	 * Propiedad para colocar un identificador para html.
	 * @type
	 * Puede recibir **string** | **undefined**
	 */
	id?: string;
	/**
	 * @description
	 * Propiedad para colocar el tipo de texto.
	 * @type
	 * Puede recibir **text** | **password**  | **email**
	 * @value
	 * El valor por defecto es **text**
	 */
	type?: "text" | "password" | "email";
	/**
	 * @description
	 * Propiedad para colocar el tamaño del input.
	 * @type
	 * Puede recibir **sm** | **md**  | **lg**
	 * @value
	 * El valor por defecto es **md**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el mismo input.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el container del input.
	 */
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al principio el input
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 */
	startContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al final el input
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 */
	endContent?: React.ReactNode | React.ReactNode[];
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
	 */
	isErrorText?: boolean;
	/**
	 * @description
	 * Propiedad para bloquear el campo el texto, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **boolean**
	 */
	disabled?: boolean;
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
	 * Propiedad para lanzar un evento de cambio de estado del valor del input
	 * @type
	 * Retorna un valor (e) => de tipo Target => e.target.value
	 * @value
	 * El campo no es requerido
	 */
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	/**
	 * @description
	 * Propiedad para hacer focus al elemento.
	 */
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	/**
	 * @description
	 * Propiedad para ingresar un texto de fondo
	 */
	placeholder?: string;
	/**
	 * @description
	 * Propiedad para ingresar un nombre de identifacion
	 */
	name?: string;
	/**
	 * @description
	 * Propiedad para ingresar valores en el input
	 * @value
	 * El campo no es requerido
	 */
	value?: string;
};
