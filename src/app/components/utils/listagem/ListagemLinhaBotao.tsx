interface ListagemLinhaBotaoProp {
    role?: string
    onClick: () => void
    icon: JSX.Element
    css: string
}

export default function ListagemLinhaBotao(prop : ListagemLinhaBotaoProp) {
    
    return (
        <button role={prop.role} className={`p-2 ${prop.css}`} onClick={() => prop.onClick()}>
            {prop.icon}
        </button>
    )
}