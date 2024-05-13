interface ListagemLinhaConteudoComentarioProp {
    role?: string
    comentario?: string
}

export default function ListagemLinhaConteudoComentario(prop: ListagemLinhaConteudoComentarioProp) {

    return (
        <div role={`${prop.role}-comentario`} className="text-regular-label text-ellipsis overflow-hidden">
            {prop.comentario}
        </div>
    )
}