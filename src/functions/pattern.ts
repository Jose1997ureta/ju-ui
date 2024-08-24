import { PatternInputProps } from "@/interfaces";

const FC_PatternNumber = (value: string) => {
	return /^(\d+)?$/.test(value);
};

const FC_PatternAlphabetic = (value: string) => {
	return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(value);
};

const FC_PatternDecimal = (value: string) => {
	return /^\d*\.?\d*$/.test(value);
};

const FC_PatternAlphaNumeric = (value: string) => {
	return /^[a-zA-Z0-9\s]*$/.test(value);
};

const FC_PatternNumberSpace = (value: string) => {
	return /^[0-9\s]*$/.test(value);
};

const FC_PatternNumberDot = (value: string) => {
	return /^[\d,]+$/.test(value);
};

export const FC_ValidatePatternInput = (
	patternInput: PatternInputProps | "",
	value: string
) => {
	if (patternInput === "number") return FC_PatternNumber(value);
	else if (patternInput === "decimal") return FC_PatternDecimal(value);
	else if (patternInput === "alphabetic") return FC_PatternAlphabetic(value);
	else if (patternInput === "alpha-numeric")
		return FC_PatternAlphaNumeric(value);
	else if (patternInput === "numeric-space")
		return FC_PatternNumberSpace(value);
	else if (patternInput === "numeric-comma") return FC_PatternNumberDot(value);

	return true;
};
