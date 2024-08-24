export type ExcludeType<T, U extends string | number | symbol> = T extends U
	? never
	: T;

export type IncludeType<T, U extends any[]> = T | U[number];

export type PatternInputProps =
	| ""
	| "number"
	| "decimal"
	| "alphabetic"
	| "alpha-numeric"
	| "numeric-space"
	| "numeric-comma";

export type ColorProps =
	| "primary"
	| "secondary"
	| "neutral"
	| "success"
	| "warning"
	| "danger";

export type SizeProps = "xs" | "sm" | "md" | "lg";
