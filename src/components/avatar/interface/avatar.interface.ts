import { ColorProps, ExcludeType, IncludeType, SizeProps } from "@/interfaces";

export type AvatarComponentProps = {
	/**
	 * @description
	 * Propiedad para colocar el tamaño del avatar.
	 * @type
	 * Puede recibir **"xs"** | **"sm"** | **"md"**  | **"lg"**
	 * @value
	 * El valor por defecto es **"md"**
	 */
	size?: SizeProps;
	/**
	 * @description
	 * Propiedad para opacar el avatar
	 * @type
	 * Puede recibir **"boolean"**
	 */
	disabled?: boolean;
	/**
	 * @description
	 * Propiedad para colocar un border radius.
	 * @type
	 * Puede recibir **"sm"** | **"md"**  | **"lg"** | **"full"**
	 * @value
	 * El valor por defecto es **""full""**
	 */
	radius?: IncludeType<ExcludeType<SizeProps, "xs">, ["full"]>;
	/**
	 * @description
	 * Propiedad para colocar un border color.
	 * @type
	 * Puede recibir **"default"** | **"primary"** | **"secondary"**  | **"neutral"** | **"success"** | **"warning"** | **"danger"**
	 * @value
	 * El valor no es requerido
	 */
	border?: IncludeType<ColorProps, ["default"]>;
	/**
	 * @description
	 * Propiedad para ingresar elementos personalizados
	 * @type
	 * Puede recibir **"JSX"**
	 */
	content?: React.ReactNode;
	/**
	 * @description
	 * Propiedad para brindar la ruta de la imagen
	 */
	src?: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente de avatar.
	 */
	className?: string;
	/**
	 * @description
	 * Propiedad para brindar clases personalizadas al componente de containers avatar.
	 */
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad para ingresar un nombre
	 */
	name?: string;
	/**
	 * @description
	 * Propiedad para ingresar un estado al avatar
	 */
	status?: "active" | "pending" | "inactive";
	/**
	 * @description
	 * Propiedad lanzar un evento click
	 */
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type AvatarGroupProps = {
	max?: number;
	total?: number;
	children: React.ReactNode | React.ReactNode[];
	renderCount?: ({ total }: { total: number }) => React.ReactNode;
};
