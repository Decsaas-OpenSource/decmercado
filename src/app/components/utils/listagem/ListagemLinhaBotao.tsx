interface ListagemLinhaBotaoProp {
    onClick: () => void
    icon: JSX.Element
}

export default function ListagemLinhaBotao(prop : ListagemLinhaBotaoProp) {
    
    return (
        <button className="text-perigo-300 p-2" onClick={() => prop.onClick()}>
            {prop.icon}
        </button>
    )
}