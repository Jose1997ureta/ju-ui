import clsx from "clsx";
import { LuLoader2 } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { LoadingProps } from "./interface/loading.interface";

export const Loading = ({
	color = "secondary",
	className,
	size = "md",
	classNameIcon,
	stroke = "base",
}: LoadingProps) => {
	const iconClass = clsx({
		"stroke-primary-700": color === "primary",
		"stroke-secondary-700": color === "secondary",
		"stroke-neutral-700": color === "neutral",

		"h-6 w-6": size === "xs",
		"h-8 w-8": size === "sm",
		"h-10 w-10": size === "md",
		"h-12 w-12": size === "lg",

		"stroke-1": stroke === "light",
		"stroke-2": stroke === "base",
	});

	const paddingClass = clsx({
		"p-3": size === "xs",
		"p-5": size === "sm",
		"p-7": size === "md",
		"p-9": size === "lg",
	});

	return (
		<div
			className={twMerge(
				"absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-20",
				className
			)}
		>
			<div
				className={twMerge("rounded bg-white", paddingClass, classNameIcon)}
			>
				<LuLoader2
					className={twMerge("animate-spin fill-transparent", iconClass)}
				/>
			</div>
		</div>
	);
};
