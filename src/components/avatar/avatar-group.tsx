import React from "react";
import { AvatarGroupProps } from "./interface/avatar.interface";

export const AvatarGroup = ({
	max = 5,
	total,
	children,
	renderCount,
}: AvatarGroupProps) => {
	const avatars = React.Children.toArray(children).slice(0, max);

	return (
		<div className="flex items-center -space-x-2">
			{avatars.map((avatar, index) => (
				<div
					key={index}
					className="hover:scale-105 transition-all duration-200 hover:z-10"
				>
					{avatar}
				</div>
			))}

			{renderCount &&
				renderCount({
					total: (total || React.Children.toArray(children).length) - max,
				})}
		</div>
	);
};
