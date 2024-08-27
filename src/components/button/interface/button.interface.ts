import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type ButtonComponentProps = {
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
	 * Propiedad para colocar el tamaño del input.
	 * @type
	 * Puede recibir **sm** | **md**  | **lg**
	 * @value
	 * El valor por defecto es **md**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	/**
	 * @description
	 * Propiedad para colocar el color.
	 * @type
	 * Puede recibir **primary** | **secondary**  | **third**  | **success**  | **warning** | **danger**
	 * @value
	 * El valor por defecto es **primary**
	 */
	color?: ColorProps;
	/**
	 * @description
	 * Propiedad para elegir la variante del boton.
	 * @type
	 * Puede recibir **solid** | **outline**  | **flat**
	 * @value
	 * El valor por defecto es **solid**
	 */
	variant?: "solid" | "outline" | "flat";
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al principio del button
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 */
	startContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para ingresar un elemento(s) para renderizar al final del button
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 */
	endContent?: React.ReactNode | React.ReactNode[];
	/**
	 * @description
	 * Propiedad para bloquear el boton, mostrando una opacidad
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

export type ButtonIconComponentProps = {
	loading?: boolean;
	children: React.ReactNode | React.ReactNode[];
	size?: SizeProps;
	radius?: IncludeType<ExcludeType<SizeProps, "xs">, ["full"]>;
	color?: IncludeType<ColorProps, ["default"]>;
	variant?: "solid" | "outline" | "light" | "hover";
	// variant?: "solid" | "outline" | "light" | "flat";
	disabled?: boolean;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
