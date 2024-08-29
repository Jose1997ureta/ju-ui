import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type ButtonComponentProps = {
	/**
	 * @description
	 * Propiedad para mostrar una carga en el boton
	 * @type
	 * Puede recibir **"boolean"**
	 */
	loading?: boolean;
	/**
	 * @description
	 * Propiedad para insertar elementos jsx
	 * @type
	 * Puede recibir **"React.ReactNode"** | **"React.ReactNode[]"**
	 */
	children: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para colocar el tamaño del button.
	 * @type
	 * Puede recibir **"sm"** | **"md"**  | **"lg"**
	 * @value
	 * El valor por defecto es **"md"**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	/**
	 * @description
	 * Propiedad para colocar el color.
	 * @type
	 * Puede recibir **"primary"** | **"secondary"**  | **"neutral"**  | **"success"**  | **"warning"** | **"danger"**
	 * @value
	 * El valor por defecto es **"primary"**
	 */
	color?: ColorProps;
	/**
	 * @description
	 * Propiedad para colocar una variante del boton del icon.
	 * @type
	 * Puede recibir **"solid"** | **"outline"** | **"light"**  | **"flat"**
	 * @value
	 * El valor por defecto es **"solid"**
	 */
	variant?: "solid" | "outline" | "light" | "flat";
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al principio del button
	 * @type
	 * Puede recibir **"React.ReactNode"** | **"React.ReactNode[]"**
	 */
	startContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al final del button
	 * @type
	 * Puede recibir **"React.ReactNode"** | **"React.ReactNode[]"**
	 */
	endContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para bloquear el boton, mostrando una opacidad
	 * @type
	 * Puede recibir **"boolean"**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el mismo input.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad lanzar un evento click
	 */
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ButtonIconComponentProps = {
	/**
	 * @description
	 * Propiedad para mostrar una carga en el boton
	 * @type
	 * Puede recibir **boolean**
	 */
	loading?: boolean;
	/**
	 * @description
	 * Propiedad para insertar elementos jsx
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 */
	children: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para colocar el tamaño del button icon.
	 * @type
	 * Puede recibir **xs** | **sm** | **md**  | **lg**
	 * @value
	 * El valor por defecto es **md**
	 */
	size?: SizeProps;
	/**
	 * @description
	 * Propiedad para colocar un border radius.
	 * @type
	 * Puede recibir **"sm"** | **"md"**  | **"lg"** | **"full"**
	 * @value
	 * El valor por defecto es **"full"**
	 */
	radius?: IncludeType<ExcludeType<SizeProps, "xs">, ["full"]>;
	/**
	 * @description
	 * Propiedad para colocar un color de fondo.
	 * @type
	 * Puede recibir **"default"** | **"primary"** | **"secondary"**  | **"neutral"** | **"success"** | **"warning"** | **"danger"**
	 * @value
	 * El valor por defecto es **"neutral"**
	 */
	color?: IncludeType<ColorProps, ["default"]>;
	/**
	 * @description
	 * Propiedad para colocar una variante del boton del icon.
	 * @type
	 * Puede recibir **solid** | **outline** | **light**  | **flat**
	 * @value
	 * El valor por defecto es **solid**
	 */
	variant?: "solid" | "outline" | "light" | "flat";
	/**
	 * @description
	 * Propiedad para bloquear el campo el texto, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **boolean**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el mismo input.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad lanzar un evento click
	 */
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
