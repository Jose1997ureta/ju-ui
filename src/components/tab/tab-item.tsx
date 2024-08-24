import clsx from "clsx";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useTabContext } from "./hook/use-tab";
import { TabItemProps } from "./interface/tab.interface";

export const TabItem = ({
	children,
	keyCurrent,
	className,
	onClick,
}: TabItemProps) => {
	const { activeKey, color, disabledKeys, variant } = useTabContext();

	const active = useMemo(() => {
		return keyCurrent === activeKey;
	}, [keyCurrent, activeKey]);

	const isDisabled = useMemo(() => {
		if (Array.isArray(disabledKeys))
			return disabledKeys.some((el) => el === keyCurrent);

		return false;
	}, [disabledKeys, keyCurrent]);

	const borderClass = clsx(
		"text-text-900",
		!active && variant === "underline"
			? "[box-shadow:inset_0px_-1px_0px_0px_#f1f3f9]"
			: undefined,
		{
			/* PRIMARY */
			"[box-shadow:inset_0px_-2px_0px_0px_#0048d0] text-primary-700":
				color === "primary" &&
				active &&
				!isDisabled &&
				variant === "underline",

			"hover:text-primary-700":
				color === "primary" && !active && !isDisabled,

			/* SECONDARY */
			"[box-shadow:inset_0px_-2px_0px_0px_#ff6b00] text-secondary-700":
				color === "secondary" &&
				active &&
				!isDisabled &&
				variant === "underline",

			"hover:text-secondary-700":
				color === "secondary" && !active && !isDisabled,

			/* THIRD */
			"[box-shadow:inset_0px_-2px_0px_0px_#23272f] text-neutral-700":
				color === "neutral" &&
				active &&
				!isDisabled &&
				variant === "underline",

			"hover:text-neutral-700":
				color === "neutral" && !active && !isDisabled,

			/* SUCCESS */
			"[box-shadow:inset_0px_-2px_0px_0px_#00ab6d] text-success-700":
				color === "success" &&
				active &&
				!isDisabled &&
				variant === "underline",

			"hover:text-success-700":
				color === "success" && !active && !isDisabled,

			/* WARNING */
			"[box-shadow:inset_0px_-2px_0px_0px_#c38343] text-warning-700":
				color === "warning" &&
				active &&
				!isDisabled &&
				variant === "underline",

			"hover:text-warning-700":
				color === "warning" && !active && !isDisabled,

			/* DANGER */
			"[box-shadow:inset_0px_-2px_0px_0px_#e02d3c] text-danger-700":
				color === "danger" &&
				active &&
				!isDisabled &&
				variant === "underline",

			"hover:text-danger-700": color === "danger" && !active && !isDisabled,
		}
	);

	const solidClass = clsx({
		"text-white rounded": active && variant === "solid",
		"bg-primary-700": active && variant === "solid" && color === "primary",
		"bg-secondary-700":
			active && variant === "solid" && color === "secondary",
		"bg-neutral-700": active && variant === "solid" && color === "neutral",
		"bg-success-700": active && variant === "solid" && color === "success",
		"bg-warning-700": active && variant === "solid" && color === "warning",
		"bg-danger-700": active && variant === "solid" && color === "danger",
	});

	const handleClick = () => {
		onClick && !isDisabled && onClick(keyCurrent);
	};

	return (
		<div
			onClick={handleClick}
			className={twMerge(
				"transition-all duration-300 flex cursor-pointer items-center justify-center px-1 py-2 aria-disabled:opacity-50 aria-disabled:cursor-default shrink-0 text-sm",
				borderClass,
				solidClass,
				className
			)}
			aria-disabled={isDisabled}
		>
			{children}
		</div>
	);
};
