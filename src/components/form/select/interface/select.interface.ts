import {
	ColorProps,
	ExcludeType,
	PatternInputProps,
	SizeProps,
} from "@/interfaces";
import { ReactNode } from "react";
import { GroupBase, MenuPosition, OptionsOrGroups } from "react-select";
import { ActionChangeProps } from "./select-share.interface";

export type SelectGeneralProps = {
	/**
	 * @description
	 * Propiedad para definir la altura maxima del container que envuelve a los items del select llamandos **menu**.
	 * @type
	 * Puede recibir **number**, el campo no es obligatorio.
	 * @value
	 * El valor por defecto es **200px**.
	 */
	maxMenuHeight?: number;
	/**
	 * @description
	 * Propiedad para definir la altura minima del container que envuelve a los items del select llamandos **menu**
	 * @type
	 * Puede recibir **number**,  el campo no es obligatorio.
	 * @value
	 * El valor por defecto es **undefined**
	 */
	minMenuHeight?: number;
	/**
	 * @description
	 * Propiedad para mostrar un texto cuando no hay valor asignado
	 * @type
	 * Puede recibir **React.ReactNode**, el campo no es obligatorio.
	 * @value
	 * El valor por defecto es **Select**
	 */
	placeholder?: React.ReactNode;
	/**
	 * @description
	 * Propiedad para brindar clasess personalizadad al componente, este se situa en la parte superior de este mismo.
	 */
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad que permite seleccionar los elementos del menu.
	 * @return Retorna los siguiente valores:
	 * @item  elemento seleccionado
	 * @data  toda la informacion selecciona puede ser **object** | **object[]** | **null**
	 * @action el evento se que esta ejecutando
	 */
	onChange: ({
		item,
		data,
		action,
	}: {
		item: any;
		data: OptionsOrGroups<any, GroupBase<any>>;
		action: ActionChangeProps;
	}) => void;
	/**
	 * @description
	 * Propiedad para hacer focus al elemento.
	 */
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	/**
	 * @description
	 * Propiedad que se utiliza para dar color a los hover de cada item del select y ademas los item 	que se seleccione cuando este se convierte en multiple.
	 * @variant
	 * Los valores que recibe es: **primary** | **secondary** | **neutral** | **success** | **warning** | **danger**.
	 * @value
	 * El valor por defecto es **secondary**.
	 */
	color?: ColorProps;
	/**
	 * @description
	 * Propiedad para definir el ancho del container del menu.
	 * @type
	 * Puede recibir **number** y **string**.
	 * @value
	 * El valor por defecto es **100%**
	 */
	widthMenu?: number | string;

	error?: string | never[] | string[];
	touched?: boolean | never[];

	startValueContent?: React.ReactNode | React.ReactNode[];
	childrenOption?: ({
		data,
		isSelected,
	}: {
		data: any;
		isSelected: boolean;
	}) => ReactNode | ReactNode[];
	childrenSingleValue?: ({ data }: { data: any }) => ReactNode | ReactNode[];

	isSearchable?: boolean;
	isMulti?: boolean;
	disabled?: boolean;
	name?: string;
	value?: any;
	onMenuOpen?: () => void;
	isLoading?: boolean;
	size?: ExcludeType<SizeProps, "xs">;
	isItemAll?: "only" | "all";
	/**
	 * @description
	 * Propiedad para definir el position.
	 * @type
	 * Puede recibir **MenuPosition**. -> **absolute** | **fixed**
	 * @value
	 * El valor por defecto es **absolute%**
	 */
	menuPosition?: MenuPosition;
	/**
	 * @description
	 * Propiedad para definir de donde se tomara la referencia y que pueda respetar el flujo.
	 * @type
	 * Puede recibir **boolean**.
	 * @value
	 * El valor por defecto es **false%**
	 */
	isPortal?: boolean;
	/**
	 * @description
	 * Propiedad para definir si el menu va a estar abierto manualmente.
	 * @type
	 * Puede recibir **boolean**.
	 * @value
	 * El valor por defecto es **undefined%**
	 */
	menuIsOpen?: boolean;
	isClearable?: boolean;
	ref?: any;
	pattern?: PatternInputProps;
};

export type SelectProps = SelectGeneralProps & {
	data: OptionsOrGroups<any, GroupBase<any>>;
};

export type AutoCompleteProps = SelectGeneralProps & {
	loadOption: (
		inputValue: string
	) => Promise<OptionsOrGroups<any, GroupBase<any>>>;
	defaultOptions?: boolean | OptionsOrGroups<any, GroupBase<any>>;
};

export type SelectStyleProps = {
	color?: ColorProps;
	widthMenu: number | string;
	error?: string | never[] | string[];
	touched?: boolean | never[];
	size?: ExcludeType<SizeProps, "xs">;
};
