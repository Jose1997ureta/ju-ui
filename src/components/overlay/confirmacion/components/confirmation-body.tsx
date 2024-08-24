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
				"max-h-52 overflow-y-auto",
				clsx(
					isClose ? "sm:!mr-[44px] mr-4" : "mr-4",
					isIcon ? "sm:!ml-[68px] ml-4" : "ml-4"
				),
				className
			)}
		>
			{children || (
				<>
					{text ? (
						<p className="text-sm !leading-[18px] text-text-800">
							{text}
						</p>
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

// interface ConfirmationBodyDescriptionProps {
// 	text: string;
// 	className?: string;
// }

// export const ConfirmationBodyDescription = ({
// 	text,
// 	className,
// }: ConfirmationBodyDescriptionProps) => {
// 	return (
// 		<p
// 			className={twMerge("text-sm !leading-[18px] text-text-800", className)}
// 		>
// 			{text}
// 		</p>
// 	);
// };

// ConfirmationBody.Desciption = ConfirmationBodyDescription;
