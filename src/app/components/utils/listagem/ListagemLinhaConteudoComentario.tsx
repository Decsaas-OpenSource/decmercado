interface ListagemLinhaConteudoComentarioProp {
    role?: string
    comentario?: string
}

export function ListagemLinhaConteudoComentario(prop: ListagemLinhaConteudoComentarioProp) {

    return (
        <div role={`${prop.role}-comentario`} className="text-regular-label text-ellipsis overflow-hidden">
            {prop.comentario}
        </div>
    )
}

interface ListagemLinhaConteudoComentarioBotaoProp extends ListagemLinhaConteudoComentarioProp {
    onClick(): void
}

export function ListagemLinhaConteudoComentarioBotao(prop: ListagemLinhaConteudoComentarioBotaoProp) {

    return (
        <button role={`${prop.role}-comentario`} 
            onClick={prop.onClick}
            className="text-regular-label text-ellipsis overflow-hidden">
            {prop.comentario}
        </button>
    )
}