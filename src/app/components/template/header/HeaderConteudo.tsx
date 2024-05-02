interface HeaderProp {
    children: React.ReactNode
}

export default function HeaderConteudo(prop: HeaderProp) {

    return (
        <span className="mr-auto">
            {prop.children}
        </span>
    )
}