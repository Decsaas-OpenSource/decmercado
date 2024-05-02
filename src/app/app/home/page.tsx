"use client"

import Link from "next/link";
import { CarrinhoCard, ListaBullet, Sobre } from "../../icons";
import { Header } from "@/app/components/template/header/Header";
import { Footer } from "@/app/components/template/footer/Footer";

import Body from "../../components/template/Body";
import { Card } from "@/app/components/home/cards/Card";
import { useEffect, useState } from "react";
import ListasDeMercado from "@/app/storage/local/ListasDeMercado";
import ListaDeMercado from "@/app/model/lista/ListaDeMercado";
import ListaCards from "@/app/components/home/ListaCards";
import ReceitasCards from "@/app/components/home/ReceitasCards";
import Receitas from "@/app/storage/local/Receitas";
import Receita from "@/app/model/lista/Receita";
import { URL_BASE_LISTA, URL_BASE_CARRINHO, URL_BASE_RECEITA, URL_BASE_SOBRE } from "@/app/constants";

export default function Home() {

    const LIMITE_CARDS_LISTA = 2
    const LIMITE_CARDS_RECEITA = 6

    const INICIO_SLICE_CARDS = 0

    const [storageLista] = useState(new ListasDeMercado())
    const [listas, setListas] = useState<ListaDeMercado[]>([])
    const [listaVerMais, setListaVerMais] = useState<boolean>(false)

    const [storageReceita] = useState(new Receitas())
    const [receitas, setReceitas] = useState<Receita[]>([])
    const [receitaVerMais, setReceitaVerMais] = useState<boolean>(false)

    useEffect(() => {
        storageLista.carregar()

        setListaVerMais(storageLista.todos.length > LIMITE_CARDS_LISTA)
        setListas(storageLista.todos.slice(INICIO_SLICE_CARDS, LIMITE_CARDS_LISTA))
    }, [storageLista])

    useEffect(() => {
        storageReceita.carregar()

        setReceitaVerMais(storageReceita.todos.length > LIMITE_CARDS_RECEITA)
        setReceitas(storageReceita.todos.slice(INICIO_SLICE_CARDS, LIMITE_CARDS_RECEITA))
    }, [storageReceita])

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Bem vindo"></Header.Titulo>
                    <Header.SubTitulo valor="Site criado por decsaas.dev.br"></Header.SubTitulo>
                </Header.Conteudo>
                <Header.Botao>
                    <Link href={URL_BASE_SOBRE} className="m-auto">
                        {Sobre}
                    </Link>
                </Header.Botao>
            </Header.Root>

            <Body>
                <Card.Root urlRedirect={URL_BASE_CARRINHO}>
                    <Card.BodyMeuCarrinho>
                        <Card.ConteudoCarrinho titulo="Meu Carrinho"
                            detalhe="(Vazio)" />
                        <Card.IconeCarrinho icon={CarrinhoCard} />
                    </Card.BodyMeuCarrinho>
                </Card.Root>

                <ListaCards listas={listas} verMais={listaVerMais}>
                    {
                        listas.map((item) => {
                            return (
                                <Card.Root key={item.id} urlRedirect={`${URL_BASE_LISTA}${item.id}`}>
                                    <Card.BodyMinhasListas>
                                        <Card.ConteudoLista
                                            titulo={item.descricao}
                                            detalhe={`Itens adicionados (${item.quantidade})`} />
                                        <Card.IconeLista icon={ListaBullet} />
                                    </Card.BodyMinhasListas>
                                </Card.Root>
                            )
                        })
                    }
                </ListaCards>

                <ReceitasCards receitas={receitas} verMais={receitaVerMais}>
                    {
                        receitas.map((item) => {
                            return (
                                <Card.Root key={item.id} urlRedirect={`${URL_BASE_RECEITA}${item.id}`}>
                                    <Card.BodyMinhasReceitas>
                                        <Card.ConteudoReceita
                                            titulo={item.descricao}
                                            detalhe={`Ingredientes (${item.quantidade})`} />
                                    </Card.BodyMinhasReceitas>
                                </Card.Root>
                            )
                        })
                    }
                </ReceitasCards>
            </Body>

            <Footer.Root>
                <Footer.Menu focoHome />
            </Footer.Root>
        </>
    )
}