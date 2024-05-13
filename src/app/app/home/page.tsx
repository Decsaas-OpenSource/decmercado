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
import { URL_LISTA, URL_CARRINHO, URL_RECEITA } from "@/app/constants";
import { Divisor } from "@/app/components/utils/Divisor";
import StoregeMeuCarrinho from "@/app/storage/local/MeuCarrinho";
import Produto from "@/app/model/Produto";
import SubJanela from "@/app/components/utils/subJanela/SubJanela";
import { Botao, BotaoComIcone } from "@/app/components/utils/Botao";

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

    const [storageMeuCarrinho] = useState(new StoregeMeuCarrinho())
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<Produto[]>([])
    const [produtosParaComprar, setProdutosParaComprar] = useState<Produto[]>([])

    const [exibirModalSobre, setExibirModalSobre] = useState(false)

    useEffect(() => {
        storageMeuCarrinho.carregar()

        setProdutosNoCarrinho(storageMeuCarrinho.meuCarrinho.noCarrinho)
        setProdutosParaComprar(storageMeuCarrinho.meuCarrinho.paraComprar)
    }, [storageMeuCarrinho])


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
                    <BotaoComIcone
                        icon={Sobre} css="text-branco"
                        onClick={() => {
                            setExibirModalSobre(true)
                        }} />
                </Header.Botao>
            </Header.Root>

            <Body>
                <Card.Root urlRedirect={URL_CARRINHO}>
                    <Card.BodyMeuCarrinho>
                        <Card.ConteudoCarrinho titulo="Meu Carrinho"
                            totalNoCarrinho={produtosNoCarrinho.length}
                            totalParaComprar={produtosParaComprar.length} />
                        <Card.IconeCarrinho />
                    </Card.BodyMeuCarrinho>
                </Card.Root>

                <Divisor />

                <ListaCards listas={listas} verMais={listaVerMais}>
                    {
                        listas.map((item, i) => {
                            return (
                                <Card.Root role={`card-lista-${i}`} key={item.id} urlRedirect={`${URL_LISTA}${item.id}`}>
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
                                <Card.Root key={item.id} urlRedirect={`${URL_RECEITA}${item.id}`}>
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

            <SubJanela exibir={exibirModalSobre}>
                <div className="text-center bg-primario-500 text-branco h-60 w-80 content-center">
                    <div className="text-bold-titulo font-['Satisfy'] text-[60px] ">
                        DecMercado
                    </div>

                    <div className="flex">
                        <div className="w-full content-end">
                            <div className="text-bold-sub-titulo">Tecnologias</div>
                            <div className="text-regular-label">NextJS</div>
                            <div className="text-regular-label">Tailwind</div>
                            <div className="text-regular-label">PWA</div>
                        </div>

                        <div className="w-full content-end">
                            <div className="text-regular-label">Desenvolvedor FullStack</div>
                            <div className="text-bold-label">Rodrigo</div>
                        </div>
                    </div>

                    <Botao titulo="Fechar" css="fixed left-0 bottom-0 right-0 bg-perigo-300 rounded-none"
                        onClick={()=> {
                        setExibirModalSobre(false)
                    }} />
                </div>
            </SubJanela>
        </>
    )
}