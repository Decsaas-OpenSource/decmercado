import { CSS_LISTAGEM_LINHA } from "./Listagem"

interface ListagemLinhaOnClickProp {
    role?: string,
    item: ListagemDTO,
    onClick: (item: ListagemDTO) => void
    children: React.ReactNode
}

export default function ListagemLinhaOnClick(prop: ListagemLinhaOnClickProp) {

    return (
        <div role={`${prop.role}-click`} className={CSS_LISTAGEM_LINHA} onClick={() => { prop.onClick(prop.item) }}>
            {prop.children}
        </div>
    )
}