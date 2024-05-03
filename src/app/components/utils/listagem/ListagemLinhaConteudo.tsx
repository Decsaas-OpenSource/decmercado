
interface ListagemLinhaConteudoProp {
    item: ListagemDTO,
    children?: React.ReactNode
    comDecimais?: boolean
}

export default function ListagemLinhaConteudo(prop: ListagemLinhaConteudoProp) {

    const decimals = prop.comDecimais ? 3 : 0

    return (
        <>
            <div className="min-w-[70px] text-center">
                <div className="text-bold-label">{prop.item.quantidade?.toFixed(decimals)}</div>
                <div className="text-regular-label">Item(ns)</div>
            </div>

            <div className="text-left w-full max-w-[200px]">
                <div className="text-bold-paragrafo text-ellipsis overflow-hidden">{prop.item.descricao}</div>
                {prop.children}
            </div>
        </>
    )
}