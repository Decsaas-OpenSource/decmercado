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
        <div className="rounded-md h-[100px] min-w-44">
            <div className="text-bold-titulo text-branco text-ellipsis overflow-hidden">
                {prop.titulo}
            </div>

            <div className="text-regular-label text-branco">
                {prop.detalhe}
            </div>
        </div>
    )
}

export function CardConteudoLista(prop: CardConteudoProd) {

    return (
        <div className="border-l-primario-500 border-l-8 p-2 rounded-md h-[90px] content-center">
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