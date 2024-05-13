interface HeaderProp {
    valor: string,
}

export default function HeaderTitulo(prop: HeaderProp) {

    return (
        <div role="titulo-pagina" className="text-branco text-bold-titulo text-ellipsis overflow-hidden">
            {prop.valor}
        </div>
    )
}