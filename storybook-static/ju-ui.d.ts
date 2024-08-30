/// <reference types="react" />

import { ClassProp } from 'class-variance-authority/types';
import { default as default_2 } from 'node_modules/react-select/dist/declarations/src/Select';
import { ForwardRefExoticComponent } from 'react';
import { GroupBase } from 'react-select';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { MenuPosition } from 'react-select';
import { OptionsOrGroups } from 'react-select';
import { PopoverAlign } from 'react-tiny-popover';
import { PopoverPosition } from 'react-tiny-popover';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Accordion: AccordionHOCContainerProps;

export declare const AccordionHOC: ({ children, className, data, ...props }: AccordionProps) => JSX_2.Element;

declare interface AccordionHOCContainerProps {
    ({ children, className, data, ...props }: AccordionProps): JSX.Element;
    Item: ({ children, keyCurrent, className, onClick, }: AccordionItemProps) => JSX.Element;
}

declare interface AccordionItemClassNameProps {
    item?: string;
    header?: string;
    body?: string;
}

declare interface AccordionItemProps {
    children: React.ReactNode;
    keyCurrent: string;
    onClick?: (key: string[]) => void;
    title?: string;
    contentHeader?: ReactNode;
    className?: AccordionItemClassNameProps;
}

declare interface AccordionProps extends AccordionShareProps {
    data?: any[];
    children: (({ item }: {
        item: any;
    }) => ReactNode) | ReactNode;
    className?: string;
}

declare interface AccordionShareProps {
    activeKeys?: string[];
    variant?: "splitted" | "solid";
    disabledKeys?: string[];
    multiple?: boolean;
    color?: ExcludeType<ColorProps, "neutral" | "success" | "warning" | "danger"> | "default";
    radius?: SizeProps;
}

export declare type ActionChangeProps = "clear" | "select-option" | "deselect-option" | "remove-value" | "pop-value" | "create-option";

export declare const Autocomplete: ForwardRefExoticComponent<Omit<AutoCompleteProps, "ref"> & RefAttributes<unknown>>;

declare type AutoCompleteProps = SelectGeneralProps & {
    loadOption: (inputValue: string) => Promise<OptionsOrGroups<any, GroupBase<any>>>;
    defaultOptions?: boolean | OptionsOrGroups<any, GroupBase<any>>;
};

export declare const Avatar: ({ className, classNameContainer, content, border, disabled, name, radius, size, src, status, onClick, }: AvatarProps) => JSX_2.Element;

declare const AvatarClassProps: (props?: ({
    border?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | "default" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    radius?: "sm" | "md" | "lg" | "full" | null | undefined;
} & ClassProp) | undefined) => string;

declare type AvatarComponentProps = {
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

export declare const AvatarGroup: ({ max, total, children, renderCount, }: AvatarGroupProps) => JSX_2.Element;

declare type AvatarGroupProps = {
    max?: number;
    total?: number;
    children: React.ReactNode | React.ReactNode[];
    renderCount?: ({ total }: {
        total: number;
    }) => React.ReactNode;
};

export declare type AvatarProps = VariantProps<typeof AvatarClassProps> & AvatarComponentProps;

export declare const Badge: ({ children, content, position, color, className, classNameContainer, isShow, showOutline, size, }: BadgeProps) => JSX_2.Element;

declare const BadgeClassProps: (props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | "white" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | null | undefined;
} & ClassProp) | undefined) => string;

declare type BadgeComponentProps = {
    children: ReactNode;
    content: ReactNode;
    color?: IncludeType<ColorProps, ["white"]>;
    size?: ExcludeType<SizeProps, "xs">;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    showOutline?: boolean;
    isShow?: boolean;
    className?: string;
    classNameContainer?: string;
};

export declare type BadgeProps = VariantProps<typeof BadgeClassProps> & BadgeComponentProps;

export declare const Button: ForwardRefExoticComponent<VariantProps<(props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "flat" | "outline" | "solid" | "light" | null | undefined;
} & ClassProp) | undefined) => string> & ButtonComponentProps & RefAttributes<HTMLButtonElement>>;

declare const ButtonClassProps: (props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "flat" | "outline" | "solid" | "light" | null | undefined;
} & ClassProp) | undefined) => string;

declare const ButtonClassProps_2: (props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | "default" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    radius?: "sm" | "md" | "lg" | "full" | null | undefined;
    variant?: "flat" | "outline" | "solid" | "light" | null | undefined;
} & ClassProp) | undefined) => string;

declare type ButtonComponentProps = {
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

export declare const ButtonIcon: ForwardRefExoticComponent<VariantProps<(props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | "default" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    radius?: "sm" | "md" | "lg" | "full" | null | undefined;
    variant?: "flat" | "outline" | "solid" | "light" | null | undefined;
} & ClassProp) | undefined) => string> & ButtonIconComponentProps & RefAttributes<HTMLButtonElement>>;

declare type ButtonIconComponentProps = {
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

export declare type ButtonIconProps = VariantProps<typeof ButtonClassProps_2> & ButtonIconComponentProps;

export declare type ButtonProps = VariantProps<typeof ButtonClassProps> & ButtonComponentProps;

export declare const CalendarPicker: ({ value, showDoubleView, className, color, minDate, maxDate, showCalendar, loading, widthCalendar, locale, format, disabled, error, onChange, onCloseCalendar, onOpenCalendar, tileDisabled, onClearCalendar, onInvalidChange, onKeyDown, onKeyUp, type, size, }: CalendarProps) => JSX_2.Element;

declare interface CalendarProps {
    value: ValueCalendar;
    onChange: (value: ValueCalendar) => void;
    showDoubleView?: boolean;
    className?: string;
    color?: ExcludeType<ColorProps, "success" | "danger" | "warning">;
    minDate?: Date;
    maxDate?: Date;
    showCalendar?: boolean;
    onCloseCalendar?: () => void;
    onClearCalendar?: () => void;
    onOpenCalendar?: () => void;
    loading?: boolean;
    widthCalendar?: number;
    disabled?: boolean;
    error?: string;
    tileDisabled?: ({ date }: {
        date: Date;
    }) => boolean;
    locale?: "es" | "en";
    format?: "MM/dd/yyyy" | "dd/MM/yyyy";
    type?: "date-picker" | "date-range-picker";
    onInvalidChange?: () => void;
    size?: ExcludeType<SizeProps, "xs">;
    onKeyUp?: (event: any) => void;
    onKeyDown?: (event: any) => void;
}

export declare const Card: {
    ({ className, children }: CardProps): JSX_2.Element;
    Header: ({ className, children, isBorder, }: CardHeaderProps) => JSX_2.Element;
    Body: ({ className, children }: CardBodyProps) => JSX_2.Element;
    Footer: ({ className, children, isBorder, }: CardFooterProps) => JSX_2.Element;
};

declare interface CardBodyProps {
    className?: string;
    children: React.ReactNode;
}

declare interface CardFooterProps {
    className?: string;
    children?: React.ReactNode;
    isBorder?: boolean;
}

declare interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
    isBorder?: boolean;
}

declare interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export declare const CheckBox: ({ id, label, required, disabled, size, value, color, onChange, positionLabel, description, error, touched, className, ...props }: CheckboxProps) => JSX_2.Element;

declare const CheckboxClassProps: (props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare type CheckboxComponentProps = {
    id: string;
    /**
     * @description
     * Propiedad para colocar el tamaño del checkbox.
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
     * Propiedad para bloquear el chip, mostrando una opacidad en el campo
     * @type
     * Puede recibir **"boolean"**
     */
    disabled?: boolean;
    /**
     * @description
     * Propiedad para colocar el texto al aldo del checkbox.
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
     * Propiedad para decidir la posicion de los texto del checkbox
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
     * Propiedad para ingresar valores en el checkbox
     * @value
     * El campo es requerido
     */
    value: boolean;
    /**
     * @description
     * Propiedad para lanzar un evento de cambio de estado del valor del checkbox
     * @type
     * Retorna un valor (state) => de tipo boolean
     * @value
     * El campo es requerido
     */
    onChange: (state: boolean) => void;
    /**
     * @description
     * Propiedad lanzar un evento click
     */
    onClick?: (e: React.MouseEvent) => void;
    /**
     * @description
     * Propiedad para brindar clases personalizadas al componente
     */
    className?: string;
};

declare type CheckboxProps = VariantProps<typeof CheckboxClassProps> & CheckboxComponentProps;

export declare const Chip: ({ children, className, color, disabled, radius, size, variant, onClick, }: ChipProps) => JSX_2.Element;

declare const ChipClassProps: (props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | "white" | "default" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "flat" | "outline" | "solid" | null | undefined;
    radius?: "sm" | "md" | "lg" | "full" | null | undefined;
} & ClassProp) | undefined) => string;

declare type ChipComponentProps = {
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

export declare type ChipProps = VariantProps<typeof ChipClassProps> & ChipComponentProps;

export declare type ColorProps = "primary" | "secondary" | "neutral" | "success" | "warning" | "danger";

declare interface ConfirmartionHeaderProps {
    title?: string;
    children?: React.ReactNode;
    className?: string;
    onClose?: () => void;
    isClose?: boolean;
    icon?: React.ReactNode;
}

export declare const Confirmation: {
    ({ children, show, classNameOverLay, className, classNameContainer, }: ConfirmationProps): ReactPortal | null;
    Header: ({ title, children, className, isClose, onClose, icon, }: ConfirmartionHeaderProps) => JSX_2.Element;
    Body: ({ text, children, className, data, isIcon, isClose, }: ConfirmationBodyProps) => JSX_2.Element;
    Footer: ({ children, className, options, }: ConfirmationFooterProps) => JSX_2.Element;
};

declare interface ConfirmationBodyProps {
    text?: string;
    children?: React.ReactNode;
    className?: string;
    data?: {
        id: string | number;
        name: string;
    }[];
    isIcon?: boolean;
    isClose?: boolean;
}

declare interface ConfirmationFooterProps {
    children?: React.ReactNode;
    className?: string;
    options?: OptionFooterProps;
}

declare type ConfirmationProps = {
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
};

export declare type ExcludeType<T, U extends string | number | symbol> = T extends U ? never : T;

export declare const FormItem: FormItemHOCContainerProps;

declare type FormItemContextProps = {
    disabled?: boolean;
    id?: string;
};

declare type FormItemHOCContainerProps = {
    ({ children, className, ...props }: FormItemHOCProps): JSX.Element;
    Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
    TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
    Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<default_2<any, boolean, GroupBase<any>>>>;
};

declare type FormItemHOCProps = FormItemContextProps & {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

declare interface HookConfirmationProps<T> {
    title: string;
    description: string;
    show: boolean;
    data?: {
        id: string | number;
        name: string;
    }[];
    params?: T;
    loading?: boolean;
}

export declare interface HookInitialValueModalProps<T> {
    show: boolean;
    hidden: boolean;
    params?: T;
}

export declare interface HookModalProps<T> {
    modal: HookInitialValueModalProps<T>;
    showModal: (parameter?: T) => void;
    updateModal: (parameter: UpdateModalProps<T>) => void;
    closeModal: () => void;
}

export declare type IncludeType<T, U extends any[]> = T | U[number];

export declare const Input: ForwardRefExoticComponent<InputComponentProps & VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLInputElement>>;

declare const InputClassProps: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare type InputComponentProps = {
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
     * El campo es requerido
     */
    value: string;
};

export declare type InputProps = InputComponentProps & VariantProps<typeof InputClassProps>;

declare const LabelClassProps: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare type LabelComponentProps = {
    /**
     * @description
     * Propiedad para colocar un identificador para html.
     * @type
     * Puede recibir **string** | **undefined**
     */
    id?: string;
    /**
     * @description
     * Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.
     */
    className?: string;
    /**
     * @description
     * Propiedad para colocar el tamaño del label.
     * @type
     * Puede recibir **sm** | **md**  | **lg**
     * @value
     * El valor por defecto es **md**
     */
    size?: ExcludeType<SizeProps, "xs">;
    /**
     * @description
     * Propiedad para colocar un aserisco en el texto.
     * @type
     * Puede recibir **boolean**
     */
    required?: boolean;
    /**
     * @description
     * Propiedad para colocar el texto.
     * @type
     * Puede recibir **string**
     */
    label: string;
    /**
     * @description
     * Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.
     */
    classNameContainer?: string;
    /**
     * @description
     * Propiedad para bloquear el campo, mostrando una opacidad en el campo
     * @type
     * Puede recibir **boolean**
     */
    disabled?: boolean;
    /**
     * @description
     * Propiedad para ingresar un elemento(s) para renderizar al principio el label
     * @type
     * Puede recibir **React.ReactNode** | **React.ReactNode[]**
     * @value
     * El valor por defecto es **undefined**
     */
    startContent?: React.ReactNode | React.ReactNode[];
    /**
     * @description
     * Propiedad para ingresar un elemento(s) para renderizar al final el label
     * @type
     * Puede recibir **React.ReactNode** | **React.ReactNode[]**
     * @value
     * El valor por defecto es **undefined**
     */
    endContent?: React.ReactNode | React.ReactNode[];
};

export declare const LabelErrorForm: ({ text, className }: LabelErrorProps) => JSX_2.Element;

declare type LabelErrorProps = {
    /**
     * @description
     * Propiedad para colocar el texto.
     * @type
     * Puede recibir **string**
     */
    text: string;
    /**
     * @description
     * Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.
     */
    className?: string;
};

export declare const LabelForm: ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & LabelComponentProps & RefAttributes<HTMLLabelElement>>;

export declare type LabelProps = VariantProps<typeof LabelClassProps> & LabelComponentProps;

export declare const Loading: ({ color, className, size, classNameIcon, stroke, }: LoadingProps) => JSX_2.Element;

declare interface LoadingProps {
    color?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
    className?: string;
    classNameIcon?: string;
    size?: SizeProps;
    stroke?: "light" | "base";
}

export declare const Modal: {
    ({ children, show, isOverLay, classNameOverLay, className, classNameContainer, hidden, onCloseOut, }: ModalProps): ReactPortal | null;
    Header: ({ className, children, title, isClose, onClose, option, }: ModalHeaderProps) => JSX_2.Element;
    Body: ({ children, className }: ModalBodyProps) => JSX_2.Element;
    Footer: ({ children, className }: ModalFooterProps) => JSX_2.Element;
};

declare interface ModalBodyProps {
    className?: string;
    children: React.ReactNode;
}

declare interface ModalFooterProps {
    className?: string;
    children: React.ReactNode;
}

declare interface ModalHeaderProps {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    isClose?: boolean;
    onClose?: () => void;
    option?: OptionModalHeaderProps;
}

declare type ModalProps = {
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

declare interface OptionFooterProps {
    cancel?: {
        show?: boolean;
        loading?: boolean;
        text?: string;
        onCancel?: () => void;
        color?: ColorProps;
        variant?: "solid" | "outline";
    };
    accept?: {
        show?: boolean;
        loading?: boolean;
        text?: string;
        onAccept?: () => void;
        color?: ColorProps;
        variant?: "solid" | "outline";
    };
}

declare interface OptionModalHeaderProps {
    classText?: string;
    classContainerText?: string;
}

export declare const Pagination: ({ className, color, total, limit, page, siblings, isLimitSelect, dataLimit, onChange, }: PaginationProps) => JSX_2.Element;

declare interface PaginationHookProps extends Pick<PaginationValueProps, "page" | "limit"> {
    handleSetPagination: (parameter: Pick<PaginationValueProps, "page" | "limit">) => void;
}

declare interface PaginationProps extends Partial<Omit<PaginationValueProps, "total">>, Pick<PaginationValueProps, "total"> {
    className?: string;
    color?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
    onChange?: (value: Pick<PaginationValueProps, "page" | "limit">) => void;
    isLimitSelect?: boolean;
    dataLimit?: number[];
}

export declare interface PaginationSetValueProps extends Pick<PaginationValueProps, "page" | "limit"> {
}

export declare interface PaginationValueProps {
    total: number;
    limit: number;
    page: number;
    siblings: number;
}

export declare type PatternInputProps = "" | "number" | "decimal" | "alphabetic" | "alpha-numeric" | "numeric-space" | "numeric-comma";

export declare const PopOver: ({ isArrow, content, children, isShow, onClickOutside, tooltipStyle, tooltipClassName, containerStyle, containerClassName, positions, align, reposition, ref, arrowConfiguration, bg, }: PopOverProps) => JSX_2.Element;

declare const PopOverClassProps: (props?: ({
    bg?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | "white" | null | undefined;
} & ClassProp) | undefined) => string;

declare type PopOverComponentProps = PopOverGeneralProps & PopOverThemeProps & {
    content: JSX.Element;
    align?: PopoverAlign;
    arrowConfiguration?: {
        arrowColor?: string;
        arrowSize?: number;
        arrowStyle?: React.CSSProperties;
        zIndex?: string;
    };
};

declare type PopOverGeneralProps = {
    isArrow?: boolean;
    children: JSX.Element;
    isShow?: boolean;
    onClickOutside?: (e: MouseEvent) => void;
    positions?: PopoverPosition[];
    reposition?: boolean;
    ref?: React.Ref<HTMLElement>;
};

export declare type PopOverProps = VariantProps<typeof PopOverClassProps> & PopOverComponentProps;

declare type PopOverThemeProps = {
    bg?: IncludeType<ColorProps, ["white"]>;
    tooltipStyle?: React.CSSProperties;
    tooltipClassName?: string;
    containerStyle?: Partial<CSSStyleDeclaration>;
    containerClassName?: string;
};

export declare const Radio: ({ id, name, color, size, className, disabled, label, description, positionLabel, error, touched, checked, value, onChange, }: RadioProps) => JSX_2.Element;

declare const RadioClassProps: (props?: ({
    color?: "primary" | "secondary" | "neutral" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare type RadioComponentProps = {
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

export declare type RadioProps = VariantProps<typeof RadioClassProps> & RadioComponentProps;

export declare const Select: ForwardRefExoticComponent<Omit<SelectProps, "ref"> & RefAttributes<unknown>>;

declare type SelectGeneralProps = {
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
    onChange: ({ item, data, action, }: {
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
    childrenOption?: ({ data, isSelected, }: {
        data: any;
        isSelected: boolean;
    }) => ReactNode | ReactNode[];
    childrenSingleValue?: ({ data }: {
        data: any;
    }) => ReactNode | ReactNode[];
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

declare type SelectProps = SelectGeneralProps & {
    data: OptionsOrGroups<any, GroupBase<any>>;
};

declare interface ShowConfirmationProps<T> extends Omit<HookConfirmationProps<T>, "show"> {
}

export declare type SizeProps = "xs" | "sm" | "md" | "lg";

declare type SlideOverProps = {
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

export declare const SliderOver: ({ children, show, isOverLay, classNameOverLay, position, className, classNameContainer, classNamePosition, onCloseOut, interaction, }: SlideOverProps) => JSX_2.Element;

export declare const Tab: TabHOCContainerProps;

export declare const TabHOC: ({ children, className, data, ...props }: TabProps) => JSX_2.Element;

declare interface TabHOCContainerProps {
    ({ children, className, data, variant, ...props }: TabProps): JSX.Element;
    Item: ({ children, keyCurrent, className, onClick, }: TabItemProps) => JSX.Element;
}

declare interface TabItemProps {
    children?: React.ReactNode;
    keyCurrent: string;
    onClick?: (key: string) => void;
    className?: string;
}

export declare const Table: TableHOCContainerProps;

declare interface TableBodyColumnProps {
    className?: string;
    text?: string;
    children?: ReactNode;
}

declare interface TableBodyProps {
    data: any[];
    children: (({ item }: {
        item: any;
    }) => ReactNode) | ReactNode;
    className?: string;
    textNoData?: string;
    loading?: boolean;
    loadingText?: string;
}

declare interface TableBodyRowProps {
    className?: string;
    children: ReactNode;
    keyCurrent: TableKeyCurrent;
    onChangeCheck?: (keyCurrent: TableKeyCurrent, value: boolean) => void;
}

declare interface TableHeaderColumnProps {
    className?: string;
    children?: ReactNode;
    color?: ExcludeType<ColorProps, "success" | "warning" | "danger"> | "default";
    icon?: ReactNode;
    text?: string;
}

declare interface TableHeaderProps {
    children: ReactNode;
    className?: string;
    dataHeader?: any[];
}

declare interface TableHeaderRowProps {
    dataHeader?: any[];
    children: (({ item }: {
        item: any;
    }) => ReactNode) | ReactNode;
    className?: string;
    valueCheck?: boolean;
    onChangeCheck?: (value: boolean) => void;
    disabledCheck?: boolean;
}

export declare const TableHOC: ({ className, children, classNameContainer, ...props }: TableProps) => JSX_2.Element;

declare interface TableHOCContainerProps {
    ({ children, className, dataHeader, ...props }: TableProps): JSX.Element;
    Header: ({ children, className }: TableHeaderProps) => JSX.Element;
    HeaderRow: ({ children, className, dataHeader, valueCheck, disabledCheck, onChangeCheck, }: TableHeaderRowProps) => JSX.Element;
    HeaderColumn: ({ children, className, color, icon, text, }: TableHeaderColumnProps) => JSX.Element;
    SearchRow: ({ children, className, dataHeader, }: TableSearchRowProps) => JSX.Element;
    SearchColumn: ({ children, className, }: TableSearchColumnProps) => JSX.Element;
    Body: ({ children, className, data, textNoData, loading, loadingText, }: TableBodyProps) => JSX.Element;
    BodyRow: ({ children, className, keyCurrent, }: TableBodyRowProps) => JSX.Element;
    BodyColumn: ({ children, className, text, }: TableBodyColumnProps) => JSX.Element;
}

declare interface TableHookProps {
    selectkeys: TableKeyCurrent[];
    disabledKeys: string[];
    valueSearch: TableValueSearchProps;
    handleSelectKey: (parameter: TableKeyCurrent) => void;
    handleSelectKeys: (parameter: TableKeyCurrent[]) => void;
    handleDisabledKeys: (parameter: string[]) => void;
    handleSetValueSearch: (key: string, value: string) => void;
}

export declare interface TableKeyCurrent {
    id: string;
    name: string;
    [key: string]: any;
}

declare interface TableProps extends TableShareProps {
    classNameContainer?: string;
    className?: string;
    children: ReactNode;
    spacing?: number;
    dataHeader?: any[];
}

declare interface TableProps_2 {
    initialSelectkey?: TableKeyCurrent[];
    initialDisabledKeys?: string[];
    initialValueSearch?: TableValueSearchProps;
}

declare interface TableSearchColumnProps {
    className?: string;
    children?: ReactNode;
}

declare interface TableSearchRowProps {
    dataHeader?: any[];
    children: (({ item }: {
        item: any;
    }) => ReactNode) | ReactNode;
    className?: string;
}

declare interface TableShareProps {
    theme?: ExcludeType<ColorProps, "success" | "warning" | "danger">;
    isCheck?: boolean;
    selectkeys?: TableKeyCurrent[];
    disabledKeys?: string[];
    isAction?: boolean;
    widthAction?: number;
}

export declare interface TableValueSearchProps {
    [key: string]: any;
}

declare interface TabProps extends TabShareProps {
    data?: any[];
    children: (({ item }: {
        item: any;
    }) => ReactNode) | ReactNode;
    className?: string;
}

declare interface TabShareProps {
    activeKey?: string;
    variant?: "solid" | "underline";
    color?: ColorProps;
    disabledKeys?: string[];
}

export declare const TextArea: ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & TextAreaComponentProps & RefAttributes<HTMLTextAreaElement>>;

declare const TextAreaClassProps: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare type TextAreaComponentProps = {
    /**
     * @description
     * Propiedad para brindar clases personalizadas al componente, este se situa en el mismo textarea.
     */
    className?: string;
    /**
     * @description
     * Propiedad para bloquear el campo el texto, mostrando una opacidad en el campo
     * @type
     * Puede recibir **boolean**
     */
    disabled?: boolean;
    maxLength?: number;
    /**
     * @description
     * Propiedad para ingresar valores en el textarea
     * @value
     * El campo es requerido
     */
    value: string;
    /**
     * @description
     * Propiedad para colocar el tamaño del textarea.
     * @type
     * Puede recibir **sm** | **md**  | **lg**
     * @value
     * El valor por defecto es **md**
     */
    size?: ExcludeType<SizeProps, "xs">;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    classNameContainer?: string;
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
     * @value
     * El valor por defecto es **true**
     */
    isErrorText?: boolean;
    isLabelCounter?: boolean;
    /**
     * @description
     * Propiedad para ingresar un elemento(s) para renderizar al principio el input
     * @type
     * Puede recibir **React.ReactNode** | **React.ReactNode[]**
     * @value
     * El valor por defecto es **undefined**
     */
    startContent?: React.ReactNode | React.ReactNode[];
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
     * Propiedad para ingresar un texto de fondo
     */
    placeholder?: string;
};

export declare type TextAreaProps = VariantProps<typeof TextAreaClassProps> & TextAreaComponentProps;

export declare const TimePicker: ({ value, className, disabled, error, format, maxTime, minTime, isIcon, isIconClear, size, onChange, onClearTime, onInvalidChange, onKeyDown, onKeyUp, }: TimePickerProps) => JSX_2.Element;

declare interface TimePickerProps {
    value: ValueCalendar;
    onChange: (value: ValueCalendar) => void;
    onClearTime?: () => void;
    className?: string;
    minTime?: string;
    maxTime?: string;
    disabled?: boolean;
    error?: string;
    format?: "hh:mm" | "hh:mm a" | "HH:mm" | "hh:mm:ss" | "hh:mm:ss a" | "HH:mm:ss";
    onInvalidChange?: () => void;
    isIcon?: boolean;
    isIconClear?: boolean;
    size?: ExcludeType<SizeProps, "xs">;
    onKeyUp?: (event: any) => void;
    onKeyDown?: (event: any) => void;
}

export declare const Toggle: ({ id, color, size, className, disabled, label, description, positionLabel, required, error, touched, value, onChange, ...props }: ToggleProps) => JSX_2.Element;

declare const ToggleClassProps: (props?: ({
    color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare type ToggleComponentProps = {
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

export declare type ToggleProps = VariantProps<typeof ToggleClassProps> & ToggleComponentProps;

declare interface UpdateConfirmationProps<T> extends Partial<HookConfirmationProps<T>> {
}

export declare interface UpdateModalProps<T> extends Partial<HookInitialValueModalProps<T>> {
}

export declare const useConfirmation: () => {
    showConfirmation: <T>(parameter: ShowConfirmationProps<T>) => void;
    confirmation: HookConfirmationProps<any>;
    closeConfirmation: () => void;
    updateConfirmation: <T_1>(paramater: UpdateConfirmationProps<T_1>) => void;
};

export declare const useModal: <T>() => HookModalProps<T>;

export declare const usePagination: ({ initialPage, initialLimit, }: UsePaginationProps) => PaginationHookProps;

declare interface UsePaginationProps {
    initialPage?: number;
    initialLimit?: number;
}

export declare const useTable: ({ initialDisabledKeys, initialSelectkey, initialValueSearch, }: TableProps_2) => TableHookProps;

export declare type ValueCalendar = ValuePiece | [ValuePiece, ValuePiece];

declare type ValuePiece = Date | null | string;

export { }
