import { ColorProps, ExcludeType, SizeProps } from "@/interfaces";

export type RadioComponentProps = {
	id?: string;
	name?: string;
	/**
	 * @description
	 * Propiedad para colocar el tamaño del radio.
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
	 * Puede recibir  **"primary"** | **"secondary"**  | **"neutral"**
	 * @value
	 * El valor por defecto es **"primary"**
	 */
	color?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
	/**
	 * @description
	 * Propiedad para bloquear el radio, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **"boolean"**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad para colocar el texto al aldo del radio.
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
	 * Propiedad para decidir la posicion de los texto del radio
	 * @type
	 * Puede recibir **"start"** | **"end"**
	 * @value
	 * El valor por defecto es **start**
	 */
	positionLabel?: "start" | "end";

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
	 * Propiedad para ingresar valor del radio
	 * @type
	 * Puede recibir **"string"**
	 */
	value: string;
	/**
	 * @description
	 * Propiedad para ingresar el estado del radio
	 * @type
	 * Puede recibir **"string"**
	 */
	checked?: string;
	/**
	 * @description
	 * Propiedad para lanzar un evento de cambio de estado del valor del radio
	 * @type
	 * Retorna un valor (state) => de tipo boolean
	 * @value
	 * El campo es requerido
	 */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente
	 */
	className?: string;
};
