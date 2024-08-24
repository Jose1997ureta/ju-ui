export type SlideOverProps = {
	/**
	 * @description
	 * Propiedad para poder ingresar Valores Elementos
	 * @type
	 * Recibe **ReactNode** -> el campo es requerido
	 * */
	children: React.ReactNode;
	/**
	 * @description
	 * Propiedad para poder mostrar el modal
	 * @type
	 * Recibe **boolean** -> campo es requerido
	 * */
	show: boolean;
	/**
	 * @description
	 * Propiedad para poder hacer click fuera del modal
	 * @type
	 * Recibe **function** -> campo no requerido
	 * */
	onCloseOut?: () => void;
	/**
	 * @description
	 * Propiedad para mostrar el fondo oscuro del modal
	 * @type
	 * Recibe **boolean** -> campo no requerido
	 * @value
	 * El valor por defecto es **false**
	 * */
	isOverLay?: boolean;
	/**
	 * @description
	 * Propiedad para dar estilo al fondo oscuro del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	classNameOverLay?: string;
	/**
	 * @description
	 * Propiedad para elegir la posicion que va aparecer el modal
	 * @type
	 * Recibe  **right** | **left** -> campo no requerido
	 * @value
	 * El valor por defecto es **right**
	 * */
	position?: "right" | "left";
	/**
	 * @description
	 * Propiedad para dar estilo al contenido del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	className?: string;
	/**
	 * @description
	 * Propiedad para dar estilo al contenido general del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	classNamePosition?: string;
	/**
	 * @description
	 * Propiedad para dar estilo al contenido de la posicion del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad para eliminar el **inert** y hacer la interaccion normalmente
	 * @type
	 * Recibe **boolean** -> campo no requerido
	 * @value
	 * el valor por defecto es **true**
	 * */
	interaction?: boolean;
};

export interface ItemRightProps {
	children: React.ReactNode;
	className?: string;
	classNamePosition?: string;
}
