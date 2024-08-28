import { ColorProps, ExcludeType, SizeProps } from "@/interfaces";

export type ToggleComponentProps = {
	id: string;
	/**
	 * @description
	 * Propiedad para colocar el tamaño del toggle.
	 * @type
	 * Puede recibir  **"sm"** | **"md"**  | **"lg"**
	 * @value
	 * El valor por defecto es **"md"**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	/**
	 * @description
	 * Propiedad para colocar un color de fondo.
	 * @type
	 * Puede recibir  **"primary"** | **"secondary"**  | **"neutral"** | **"success"** | **"warning"** | **"danger"**
	 * @value
	 * El valor por defecto es **"secondary"**
	 */
	color?: ColorProps;
	/**
	 * @description
	 * Propiedad para bloquear el toggle, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **"boolean"**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad para colocar el texto al aldo del toggle.
	 * @type
	 * Puede recibir **"string"**
	 */
	label?: string;
	/**
	 * @description
	 * Propiedad para colocar la descripcion abajo del texto.
	 * @type
	 * Puede recibir **"string"**
	 */
	description?: string;
	/**
	 * @description
	 * Propiedad para decidir la posicion de los texto del toggle
	 * @type
	 * Puede recibir **"start"** | **"end"**
	 * @value
	 * El valor por defecto es **start**
	 */
	positionLabel?: "start" | "end";
	/**
	 * @description
	 * Propiedad para colocar un aserisco en el texto.
	 * @type
	 * Puede recibir **"boolean"**
	 */
	required?: boolean;
	/**
	 * @description
	 * Propiedad para mostrar un texto de error
	 * @type
	 * Puede recibir **"string"** -> pensado en el formik
	 */
	error?: string;
	/**
	 * @description
	 * Propiedad para pasar si el valor a hizo objecto del focus del onblur
	 * @type
	 * Puede recibir **"boolean"** -> pensado en el formik
	 */
	touched?: boolean;
	/**
	 * @description
	 * Propiedad para ingresar valores en el toggle
	 * @type
	 * Puede recibir **"boolean"**
	 */
	value: boolean;
	/**
	 * @description
	 * Propiedad para lanzar un evento de cambio de estado del valor del toggle
	 * @type
	 * Retorna un valor (state) => de tipo boolean
	 * @value
	 * El campo es requerido
	 */
	onChange: (state: boolean) => void;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente
	 */
	className?: string;
};
