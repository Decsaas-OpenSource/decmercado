import ListaDeMercado from "@/app/model/lista/ListaDeMercado"
import { Card } from "./cards/Card"
import { Adicionar } from "@/app/icons"
import Link from "next/link"
import Botao from "../utils/Botao"
import { URL_BASE_LISTA } from "@/app/constants"

interface ListaCardsProp {
    children: React.ReactNode,
    listas: ListaDeMercado[],
    verMais: boolean
}

export default function ListaCards(prop: ListaCardsProp) {

    const TAMANHO_LISTAGEM = prop.listas.length
    const NENHUM_ITEM_ADICIONADO = 0

    return (

        <>
            <div className="mt-3 mb-2 flex items-center w-full">
                <span className="w-full text-bold-sub-titulo text-neutro-800">
                    Minhas listas
                </span>
                
                <Botao titulo="Nova lista"
                    href={`${URL_BASE_LISTA}nova`}
                    color="bg-primario-500"
                    css={"w-max"} />
            </div>

            <div className="flex overflow-x-scroll whitespace-nowrap">
                {
                    TAMANHO_LISTAGEM === NENHUM_ITEM_ADICIONADO ?
                        <Card.Root urlRedirect={`${URL_BASE_LISTA}nova`}>
                            <Card.BodyMinhasListas>
                                <Card.ConteudoLista
                                    titulo="Adicione uma lista"
                                    detalhe="Nenhum item adicionado" />
                                <Card.IconeLista icon={Adicionar} />
                            </Card.BodyMinhasListas>
                        </Card.Root> :
                        prop.children
                }

                {prop.verMais ?
                    (
                        <Link href={URL_BASE_LISTA} className="flex w-fit m-1" key={"vermais"}>
                            <div className={`flex items-center rounded-lg bg-primario-500 w-20 justify-center
                     `}>
                                <div className="p-2 rounded-md h-[90px] content-center">
                                    <div className="text-bold-label text-branco">
                                        Ver mais
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) : false}

            </div>
        </>

    )

}