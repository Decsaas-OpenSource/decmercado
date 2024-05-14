import Receita from "@/app/model/lista/Receita"

import { Card } from "./cards/Card"
import { Adicionar } from "@/app/icons"
import { URL_RECEITA } from "@/app/constants"
import { BotaoLink } from "../utils/Botao"

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
        <div className="relative flex flex-col grow h-max">

            <div className="absolute w-full flex flex-col grow h-full left-0 
                bg-gradient-to-r from-[#FFFFFF90] via-[#BDB9CC10] to-[#FFFFFF90]">
                <div className="flex h-full items-center justify-center">
                    <div className="bg-perigo-200 text-branco text-bold-titulo 
                        text-center rotate-45 pl-2 pr-2">
                        Indisponível
                    </div>
                </div>
            </div>


            <div className="mt-3 mb-3 flex items-center w-full">
                <span className="w-full text-bold-sub-titulo text-neutro-800">
                    Minhas receitas
                </span>
                <BotaoLink role="BotaoLinkReceitasCards" titulo="Nova receita" href={`${URL_RECEITA}nova`} css="bg-secundario-500 w-max" />
            </div>

            <div className={`flex flex-wrap whitespace-pre-wrap ${TAMANHO_LISTAGEM >= TAMANHO_PARA_CENTRALIZAR ? 'place-content-between' : ''}`}>
                {TAMANHO_LISTAGEM === NENHUM_ITEM_ADICIONADO ?
                    <Card.Root urlRedirect={`${URL_RECEITA}nova`}>
                        <Card.BodyMinhasReceitas>
                            <Card.ConteudoReceita
                                titulo="Adicione uma nova receita" />
                            <Card.IconeReceita />
                        </Card.BodyMinhasReceitas>
                    </Card.Root> :
                    prop.children
                }

                {prop.verMais ? (
                    (<BotaoLink role="BotaoLinkReceitasCardsVerMais" href={URL_RECEITA} css="bg-secundario-500" titulo="Ver mais" cssLink="w-full" />)
                ) : false}
            </div>
        </div>

    )

}