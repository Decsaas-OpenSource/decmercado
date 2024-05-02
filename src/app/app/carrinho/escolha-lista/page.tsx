"use client"

import { Footer } from "@/app/components/template/footer/Footer";
import { Header } from "@/app/components/template/header/Header";

import Body from "@/app/components/template/Body";
import { Listagem } from "@/app/components/utils/listagem/Listagem";
import { useEffect, useState } from "react";
import ListasDeMercado from "@/app/storage/local/ListasDeMercado";
import ListaDeMercado from "@/app/model/lista/ListaDeMercado";
import StoregeMeuCarrinho from "@/app/storage/local/MeuCarrinho";
import Produto from "@/app/model/Produto";
import { useRouter } from "next/navigation";
import { URL_CARRINHO } from "@/app/constants";

export default function EscolhaLista() {

    const [storageListas] = useState(new ListasDeMercado())
    const [listas, setListas] = useState<ListaDeMercado[]>([])
    const [escolhidos, setEscolhidos] = useState<ListaDeMercado[]>([])

    const [storageMeuCarrinho] = useState(new StoregeMeuCarrinho())

    const router = useRouter()

    useEffect(() => {
        storageMeuCarrinho.carregar()

        storageListas.carregar()
        setListas(storageListas.todos)
    }, [storageListas, storageMeuCarrinho])

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Selecione sua lista de compras"></Header.Titulo>
                </Header.Conteudo>
            </Header.Root>

            <Body>
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

                                    <Listagem.LinhaSemAcao>
                                        <Listagem.LinhaConteudo item={item} />
                                    </Listagem.LinhaSemAcao>

                                    <Listagem.ListaBotaoCheck onClick={(selecionado) => {
                                        const escolhidosFiltrados = escolhidos.filter((f) => f.id != item.id)

                                        if (selecionado) escolhidosFiltrados?.push(item)

                                        setEscolhidos(escolhidosFiltrados)
                                    }} />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>
            </Body>

            <Footer.Root>
                <Footer.Botao color="bg-neutro-400"
                    onClick={(e) => {
                        const meuCarrinho = storageMeuCarrinho.meuCarrinho
                        const produtos: Produto[] = []

                        escolhidos.map((listas: ListaDeMercado) => {
                            listas.produtos.map((p) => {
                                produtos.push(p)
                            })
                        })

                        meuCarrinho.paraComprar = produtos
                        storageMeuCarrinho.salvar(meuCarrinho)

                        router.push(URL_CARRINHO)
                    }}
                    titulo="Confirmar lista de compras" />
                <Footer.Menu focoCarrinho />
            </Footer.Root>
        </>
    )
}