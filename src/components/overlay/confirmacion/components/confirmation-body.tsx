import { twMerge } from "tailwind-merge";
import { IoCheckmarkSharp } from "react-icons/io5";

import clsx from "clsx";
import { ConfirmationBodyProps } from "../interface/confirmation.interface";

export const ConfirmationBody = ({
	text,
	children,
	className,
	data = [],
	isIcon = true,
	isClose = true,
}: ConfirmationBodyProps) => {
	return (
		<div
			className={twMerge(
				clsx(
					isClose ? "sm:!mr-[48px] mr-5" : "mr-5",
					isIcon ? "sm:!ml-[72px] ml-5" : "ml-5"
				),
				className
			)}
		>
			{children || (
				<>
					{text ? (
						<p className="text-sm !leading-[18px] text-text-800">{text}</p>
					) : null}

					{data.length > 0 ? (
						<div className="mt-4 space-y-2">
							{data.map((el) => (
								<div key={el.id} className="flex items-center gap-x-2">
									<IoCheckmarkSharp className="fill-text-800 stroke-text-800" />
									<p className="text-text-800 text-sm">{el.name}</p>
								</div>
							))}
						</div>
					) : null}
				</>
			)}
		</div>
	);
};
