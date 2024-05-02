interface ListagemLinhaBotaoProp {
    onClick: () => void
    icon: JSX.Element
    css: string
}

export default function ListagemLinhaBotao(prop : ListagemLinhaBotaoProp) {
    
    return (
        <button className={`p-2 ${prop.css}`} onClick={() => prop.onClick()}>
            {prop.icon}
        </button>
    )
}