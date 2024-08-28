import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type ChipComponentProps = {
	/**
	 * @description
	 * Propiedad para colocar el color.
	 * @type
	 * Puede recibir **primary** | **secondary**  | **neutral**  | **success**  | **warning** | **danger** | **white**
	 * @value
	 * El valor por defecto es **primary**
	 */
	color?: IncludeType<ColorProps, ["white"]>;
	/**
	 * @description
	 * Propiedad para colocar una variante del boton del icon.
	 * @type
	 * Puede recibir **solid** | **outline** | **flat**
	 * @value
	 * El valor por defecto es **solid**
	 */
	variant?: "solid" | "outline" | "flat";
	/**
	 * @description
	 * Propiedad para colocar el tamaño del button.
	 * @type
	 * Puede recibir **sm** | **md**  | **lg**
	 * @value
	 * El valor por defecto es **sm**
	 */
	size?: ExcludeType<SizeProps, "xs">;
	/**
	 * @description
	 * Propiedad para insertar elementos jsx
	 * @type
	 * Puede recibir **React.ReactNode** | **React.ReactNode[]**
	 */
	children: React.ReactNode;
	/**
	 * @description
	 * Propiedad para colocar un border radius.
	 * @type
	 * Puede recibir **xs** | **sm** | **md**  | **lg** | **full**
	 * @value
	 * El valor por defecto es **full**
	 */
	radius?: IncludeType<SizeProps, ["full"]>;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente, este se situa en el mismo input.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad para bloquear el chip, mostrando una opacidad en el campo
	 * @type
	 * Puede recibir **boolean**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad lanzar un evento click
	 */
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
