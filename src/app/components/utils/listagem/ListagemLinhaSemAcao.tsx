import { CSS_LISTAGEM_LINHA } from "./Listagem"

interface ListagemLinhaSemAcaoProp {
    children: React.ReactNode
}

export default function ListagemLinhaSemAcao(prop: ListagemLinhaSemAcaoProp) {

    return (
        <div className={CSS_LISTAGEM_LINHA}>
            {prop.children}
        </div>
    )
}