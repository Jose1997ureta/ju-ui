export type ModalProps = {
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
	 * El valor por defecto es **true**
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
	 * Recibe **center** | **right** | **left** -> campo no requerido
	 * @value
	 * El valor por defecto es **center**
	 * */
	className?: string;
	/**
	 * @description
	 * Propiedad para dar estilo al contenido general del modal
	 * @type
	 * Recibe **string** -> campo no requerido
	 * */
	classNameContainer?: string;
	/**
	 * @description
	 * Propiedad para ocultar el modal con un overFlow: hidden
	 * @type
	 * Recibe **boolean** -> campo no requerido
	 * @value
	 * El valor por defecto es **false**
	 * */
	hidden?: boolean;
};

export interface ModalHeaderProps {
	className?: string;
	children?: React.ReactNode;
	title?: string;
	isClose?: boolean;
	onClose?: () => void;
	option?: OptionModalHeaderProps;
}

export interface OptionModalHeaderProps {
	classText?: string;
	classContainerText?: string;
}

export interface ModalBodyProps {
	className?: string;
	children: React.ReactNode;
}
export interface ModalFooterProps {
	className?: string;
	children: React.ReactNode;
}
