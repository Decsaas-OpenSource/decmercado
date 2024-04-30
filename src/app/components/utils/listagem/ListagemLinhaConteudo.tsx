import Produto from "@/app/model/Produto"

interface ListagemLinhaConteudoProp {
    item: ListagemDTO,
    children?: React.ReactNode
}

export default function ListagemLinhaConteudo(prop: ListagemLinhaConteudoProp) {

    return (
        <>
            <div className="min-w-[70px] text-center">
                <div className="text-bold-label">{prop.item.quantidade}</div>
                <div className="text-regular-label">Iten(s)</div>
            </div>

            <div className="text-left w-full max-w-[200px]">
                <div className="text-bold-paragrafo text-ellipsis overflow-hidden">{prop.item.descricao}</div>
                {prop.children}
            </div>
        </>
    )
}