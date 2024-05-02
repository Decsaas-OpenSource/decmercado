"use client"

import Body from "@/app/components/template/Body"
import { Footer } from "@/app/components/template/footer/Footer"
import { Header } from "@/app/components/template/header/Header"
import { Listagem } from "@/app/components/utils/listagem/Listagem"
import { useEffect, useState } from "react"

import ListasDeMercado from "@/app/storage/local/ListasDeMercado"
import ListaDeMercado from "@/app/model/lista/ListaDeMercado"
import { URL_LISTA } from "@/app/constants"

export default function MinhasListas() {

    const [storage] = useState(new ListasDeMercado())
    const [listas, setListas] = useState<ListaDeMercado[]>([])

    useEffect(() => {
        storage.carregar()
        setListas(storage.todos)
    }, [storage])

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Minhas listas"></Header.Titulo>
                </Header.Conteudo>
            </Header.Root>

            <Body css="text-primario-500">
                <Listagem.Root
                    mensagemVazio="Nenhuma lista criada"
                    exibirListagem={listas.length > 0}>
                    {
                        listas.map((item, i) => {
                            return (
                                <Listagem.Linha
                                    key={item.id}
                                    indice={i}
                                    ultimo={i == listas.length - 1}
                                    corPrimaria="bg-primario-100"
                                    corSecundaria="bg-primario-200">

                                    <Listagem.LinhaRedirection item={item} urlBase={`${URL_LISTA}${item.id}`} >
                                        <Listagem.LinhaConteudo item={item} />
                                    </Listagem.LinhaRedirection>

                                    <Listagem.ListaBotaoExcluir item={item}
                                        onClickSim={(item: ListaDeMercado) => {
                                            storage.deletar(item)
                                            setListas(storage.todos)
                                        }}
                                    />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>
            </Body>

            <Footer.Root>
                <Footer.BotaoLink color="bg-neutro-400" href={`${URL_LISTA}nova`} titulo="Adicionar nova lista" />
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}