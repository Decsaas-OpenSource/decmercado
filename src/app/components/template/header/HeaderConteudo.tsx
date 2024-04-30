interface HeaderProp {
    children: React.ReactNode
}

export default function HeaderConteudo(prop: HeaderProp) {

    return (
        <span className="m-auto">
            {prop.children}
        </span>
    )
}