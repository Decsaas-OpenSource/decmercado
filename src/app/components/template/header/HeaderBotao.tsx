interface HeaderProp {
    children: React.ReactNode
}

export default function HeaderBotao(prop: HeaderProp) {

    return (
        <span className="m-auto flex text-branco">
            {prop.children}
        </span>
    )
}