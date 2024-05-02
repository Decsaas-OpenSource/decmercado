import Receita from "@/app/model/lista/Receita"

import { Card } from "./cards/Card"
import { Adicionar } from "@/app/icons"
import Botao from "../utils/Botao"
import { URL_BASE_RECEITA } from "@/app/constants"

interface ReceitasCardsProp {
    children: React.ReactNode,
    receitas: Receita[],
    verMais: boolean
}

export default function ReceitasCards(prop: ReceitasCardsProp) {

    const TAMANHO_LISTAGEM = prop.receitas.length
    const NENHUM_ITEM_ADICIONADO = 0
    const TAMANHO_PARA_CENTRALIZAR = 2

    return (
        <>
            <div className="mt-3 mb-2 flex items-center w-full">
                <span className="w-full text-bold-sub-titulo text-neutro-800">
                    Minhas receitas
                </span>
                <Botao titulo="Nova receita"
                    href={`${URL_BASE_RECEITA}nova`}
                    color="bg-secundario-500"
                    css={"w-max"} />
            </div>

            <div className={`flex flex-wrap whitespace-pre-wrap ${TAMANHO_LISTAGEM >= TAMANHO_PARA_CENTRALIZAR ? 'justify-center' : ''}`}>
                {TAMANHO_LISTAGEM === NENHUM_ITEM_ADICIONADO ?
                    <Card.Root urlRedirect={`${URL_BASE_RECEITA}nova`}>
                        <Card.BodyMinhasReceitas>
                            <Card.ConteudoReceita
                                titulo="Adicione uma nova receita" />
                            <Card.IconeReceita icon={Adicionar} />
                        </Card.BodyMinhasReceitas>
                    </Card.Root> :
                    prop.children
                }

                {prop.verMais ? (
                    (<Botao href={URL_BASE_RECEITA} color="bg-secundario-500" titulo="Ver mais" cssLink="w-full mt-3" />)
                ) : false}
            </div>
        </>

    )

}