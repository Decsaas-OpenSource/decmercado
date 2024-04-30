"use client"

import Body from "@/app/components/template/Body"
import { Footer } from "@/app/components/template/footer/Footer"
import { Header } from "@/app/components/template/header/Header"
import { Listagem } from "@/app/components/utils/listagem/Listagem"
import Receita from "@/app/model/lista/Receita"
import Receitas from "@/app/storage/local/Receitas"
import { useEffect, useState } from "react"

const urlBase = "/app/receitas/"

export default function MinhasReceitas() {

    const [storage] = useState(new Receitas())
    const [listas, setListas] = useState<Receita[]>([])

    useEffect(() => {
        storage.carregar()
        setListas(storage.todos)
    }, [storage])


    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Minhas receitas"></Header.Titulo>
                </Header.Conteudo>
            </Header.Root>

            <Body css="text-secundario-500">
            <Listagem.Root
                    mensagemVazio="Nenhum item adicionado"
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

                                    <Listagem.LinhaRedirection item={item} urlBase={`/app/listas/${item.id}`} >
                                        <Listagem.LinhaConteudo item={item} />
                                    </Listagem.LinhaRedirection>

                                    <Listagem.ListaBotaoExcluir item={item}></Listagem.ListaBotaoExcluir>
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>
            </Body>

            <Footer.Root>
                <Footer.Botao color="bg-neutro-400" href={`${urlBase}nova`} titulo="Adicionar nova receita"/>
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}