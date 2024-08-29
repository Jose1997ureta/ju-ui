import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./accordion";
import { useState } from "react";

const meta: Meta<typeof Accordion> = {
	title: "Components/Accordion",
	component: Accordion,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const data = [
	{
		id: "hola1",
		name: "Soporte",
	},
	{
		id: "hola2",
		name: "Administracion",
	},
	{
		id: "hola3",
		name: "Operaciones",
	},
];

export const Default: Story = {
	args: {},
	render: function Render() {
		const [show1, setShow1] = useState<string[]>(["hola1"]);
		const [text, setText] = useState<string>("");
		const [loading, setloading] = useState<boolean>(false);

		const handleClick = (key: string[]) => {
			setShow1(key);
			setText(
				`Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).`
			);
			setloading(false);
		};

		return (
			<div className="border w-[400px] p-4">
				<Accordion data={data} activeKeys={show1}>
					{({ item }) => (
						<Accordion.Item
							keyCurrent={item.id}
							onClick={handleClick}
							title={item.name}
							className={{
								item: "border-success-700",
								header: "bg-success-100",
							}}
						>
							{item.id === "hola1" ? (
								<p>
									Es un hecho establecido hace demasiado tiempo que un lector se
									distraerá con el contenido del texto de un
								</p>
							) : null}

							{item.id === "hola2" ? (
								<>{loading ? <p>Loading</p> : <p>{text}</p>}</>
							) : null}
						</Accordion.Item>
					)}
				</Accordion>
			</div>
		);
	},
};
