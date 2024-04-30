interface HeaderProp {
    valor: string,
}

export default function HeaderTitulo(prop: HeaderProp) {

    return (
        <div className="text-branco text-bold-titulo text-ellipsis overflow-hidden w-[300px]">
            {prop.valor}
        </div>
    )
}