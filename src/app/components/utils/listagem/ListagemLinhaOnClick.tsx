import { CSS_LISTAGEM_LINHA } from "./Listagem"

interface ListagemLinhaOnClickProp {
    item: ListagemDTO,
    onClick: (item: ListagemDTO) => void
    children: React.ReactNode
}

export default function ListagemLinhaOnClick(prop: ListagemLinhaOnClickProp) {

    return (
        <div className={CSS_LISTAGEM_LINHA} onClick={() => { prop.onClick(prop.item) }}>
            {prop.children}
        </div>
    )
}