interface CardConteudoTemplateProp {
    children: React.ReactNode
    css: string
}

function CardConteudoTemplate(prop: CardConteudoTemplateProp) {

    return (
        <div className={`border-l-primario-500 border-l-8 p-2 rounded-md ${prop.css}`}>
            {prop.children}
        </div>
    )
}

interface CardConteudoProd {
    titulo: string,
    detalhe: string
}

export function CardConteudoCarrinho(prop: CardConteudoProd) {

    return (
        <CardConteudoTemplate css="h-[111px]">
            <div className="text-bold-titulo text-branco">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-branco">
                {prop.detalhe}
            </div>
        </CardConteudoTemplate>
    )
}

export function CardConteudoLista(prop: CardConteudoProd) {

    return (
        <CardConteudoTemplate css="h-[90px] content-center">
            <div className="text-bold-sub-titulo text-primario-500">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-primario-500">
                {prop.detalhe}
            </div>
        </CardConteudoTemplate>
    )
}

interface CardConteudoReceitaProp {
    titulo: string,
    detalhe?: string
}

export function CardConteudoReceita(prop: CardConteudoReceitaProp) {

    return (
        <CardConteudoTemplate css="h-[90px] content-center">
            <div className="text-bold-paragrafo text-branco text-ellipsis overflow-hidden">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-branco">
                {prop.detalhe}
            </div>
        </CardConteudoTemplate>
    )
}