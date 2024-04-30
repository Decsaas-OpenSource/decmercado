interface ListagemLinhaConteudoComentarioProp {
    comentario?: string
}

export default function ListagemLinhaConteudoComentario(prop: ListagemLinhaConteudoComentarioProp) {

    return (
        <div className="text-regular-label text-ellipsis overflow-hidden">
            {prop.comentario}
        </div>
    )
}