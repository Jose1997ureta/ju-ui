import { createContext } from "react";
import { FormItemContextProps } from "../interface/form-item.interface";

export const FormItemContext = createContext<FormItemContextProps | null>(null);
