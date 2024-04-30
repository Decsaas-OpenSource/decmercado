interface HeaderProp {
    valor: string
}

export default function HeaderSubTitulo(prop: HeaderProp) {

    return (
        <div className="text-branco text-regular-label">
            {prop.valor}
        </div>
    )
}