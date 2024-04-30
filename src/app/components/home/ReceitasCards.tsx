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

    return (
        <>
            <div className="mt-2 mb-2 flex items-center w-full">
                <span className="w-full text-bold-sub-titulo text-neutro-800">
                    Minhas receitas
                </span>
                <Botao titulo="Nova receita"
                    href={`${URL_BASE_RECEITA}nova`}
                    color="bg-secundario-500"
                    css={"w-max"} />
            </div>

            <div className="flex flex-wrap whitespace-pre-wrap">
                {prop.receitas.length === 0 ?
                    <Card.Root urlRedirect={URL_BASE_RECEITA}>
                        <Card.BodyMinhasReceitas>
                            <Card.ConteudoReceita
                                titulo="Adicione uma nova receita" />
                            <Card.Icone icon={Adicionar} />
                        </Card.BodyMinhasReceitas>
                    </Card.Root> :
                    prop.children
                }

                {prop.verMais ? (
                    (<Botao href={URL_BASE_RECEITA} color="bg-secundario-500" titulo="Ver mais" cssLink="w-full" />)
                ) : false}
            </div>
        </>

    )

}