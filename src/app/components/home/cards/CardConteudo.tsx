interface CardConteudoCarrinhoProd {
    titulo: string,
    totalNoCarrinho: number,
    totalParaComprar: number,
}

export function CardConteudoCarrinho(prop: CardConteudoCarrinhoProd) {

    const mensagemComStatus = prop.totalNoCarrinho > 0 || prop.totalParaComprar > 0

    const mensagemTotalNoCarrinho = mensagemComStatus ?
        `Itens no carrinho (${prop.totalNoCarrinho})` :
        "Vazio"

    const mensagemTotalParaComprar = mensagemComStatus ?
        `Total de itens para compra (${prop.totalParaComprar})` :
        false

    return (
        <div className="rounded-md h-[100px] min-w-44">
            <div className="text-bold-titulo text-branco text-ellipsis overflow-hidden">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-branco">
                {mensagemTotalNoCarrinho}
            </div>

            <div className="text-regular-label text-branco">
                {mensagemTotalParaComprar}
            </div>
        </div>
    )
}

interface CardConteudoListaProd {
    titulo: string,
    detalhe: string
}

export function CardConteudoLista(prop: CardConteudoListaProd) {

    return (
        <div className="border-l-primario-500 border-l-8 p-2 rounded-md h-[90px] w-full content-center">
            <div className="text-bold-sub-titulo text-primario-500 text-ellipsis overflow-hidden">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-primario-500">
                {prop.detalhe}
            </div>
        </div>
    )
}

interface CardConteudoReceitaProp {
    titulo: string,
    detalhe?: string
}

export function CardConteudoReceita(prop: CardConteudoReceitaProp) {

    return (
        <div className="border-l-secundario-500 border-l-8 p-2 pl-1 rounded-md h-[90px] content-center">
            <div className="text-bold-paragrafo text-branco text-ellipsis overflow-hidden">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-branco">
                {prop.detalhe}
            </div>
        </div>
    )
}