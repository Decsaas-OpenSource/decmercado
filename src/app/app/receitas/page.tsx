"use client"

import Body from "@/app/components/template/Body"
import { Footer } from "@/app/components/template/footer/Footer"
import { Header } from "@/app/components/template/header/Header"
import { Listagem } from "@/app/components/utils/listagem/Listagem"
import { URL_RECEITA } from "@/app/constants"
import Receita from "@/app/model/lista/Receita"
import Receitas from "@/app/storage/local/Receitas"
import { useEffect, useState } from "react"

export default function MinhasReceitas() {

    const [storage] = useState(new Receitas())
    const [lista, setLista] = useState<Receita[]>([])

    useEffect(() => {
        storage.carregar()
        setLista(storage.todos)
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
                    mensagemVazio="Nenhuma receita criada"
                    exibirListagem={lista.length > 0}>
                    {
                        lista.map((item, i) => {
                            return (
                                <Listagem.Linha
                                    key={item.id}
                                    indice={i}
                                    ultimo={i == lista.length - 1}
                                    corPrimaria="bg-primario-100"
                                    corSecundaria="bg-primario-200">

                                    <Listagem.LinhaRedirection item={item} urlBase={`${URL_RECEITA}${item.id}`} >
                                        <Listagem.LinhaConteudo item={item} />
                                    </Listagem.LinhaRedirection>

                                    <Listagem.ListaBotaoExcluir item={item}
                                        onClickSim={(item: Receita) => {
                                            storage.deletar(item)
                                            setLista(storage.todos)
                                        }} />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>
            </Body>

            <Footer.Root>
                <Footer.BotaoLink color="bg-neutro-400" href={`${URL_RECEITA}nova`} titulo="Adicionar nova receita" />
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}