"use client"

import { Footer } from "@/app/components/template/footer/Footer";
import { Header } from "@/app/components/template/header/Header";
import { Divisor, DivisorSomenteTexto } from "@/app/components/utils/Divisor";
import { Listagem } from "@/app/components/utils/listagem/Listagem";
import { URL_CARRINHO_ESCOLHA_LISTA } from "@/app/constants";

import Body from "@/app/components/template/Body";
import { useEffect, useState } from "react";
import StoregeMeuCarrinho from "@/app/storage/local/MeuCarrinho";
import Produto from "@/app/model/Produto";
import { BotaoComIcone } from "@/app/components/utils/Botao";
import { EsvaziarCarrinho } from "@/app/icons";
import { Modal } from "@/app/components/utils/modal/Modal";

export default function MeuCarrinho() {

    const [exibirModal, setExibirModal] = useState(false)
    const [exibirModalDetalhesComentario, setExibirModalDetalhesComentario] = useState(false)
    const [detalhesComentario, setDetalhesComentario] = useState("")

    const [storageMeuCarrinho] = useState(new StoregeMeuCarrinho())
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<Produto[]>([])
    const [produtosParaComprar, setProdutosParaComprar] = useState<Produto[]>([])

    const [desabilitaImportacao, setDesabilitaImportacao] = useState(false)

    useEffect(() => {
        storageMeuCarrinho.carregar()

        const carrinho = storageMeuCarrinho.meuCarrinho

        setProdutosNoCarrinho(carrinho.noCarrinho)
        setProdutosParaComprar(carrinho.paraComprar)
    }, [storageMeuCarrinho])

    useEffect(() => {
        setDesabilitaImportacao(produtosNoCarrinho.length > 0)
    }, [produtosNoCarrinho])

    function salvarStorage(produtosNoCarrinho: Produto[], produtosParaComprar: Produto[]) {
        const carrinho = storageMeuCarrinho.meuCarrinho
        carrinho.noCarrinho = produtosNoCarrinho
        carrinho.paraComprar = produtosParaComprar

        setProdutosNoCarrinho(carrinho.noCarrinho)
        setProdutosParaComprar(carrinho.paraComprar)

        storageMeuCarrinho.salvar(carrinho)
    }

    function tituloDoCarrinho() {
        if (produtosNoCarrinho.length == 0)
            return "Vazio"

        return produtosNoCarrinho.length
    }

    function tituloParaComprar() {
        if (produtosParaComprar.length == 0)
            return "Nenhum"

        return produtosParaComprar.length
    }

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Meu carrinho"></Header.Titulo>
                </Header.Conteudo>
                <Header.Botao>
                    <BotaoComIcone
                        role="finalizar-carrinho"
                        icon={EsvaziarCarrinho} css="text-perigo-300"
                        onClick={() => {
                            setExibirModal(true)
                        }} />
                </Header.Botao>
            </Header.Root>

            <Body>
                <DivisorSomenteTexto texto={`No carrinho (${tituloDoCarrinho()})`} />

                <Listagem.Root
                    roleVazia="lista-carrinho-vazia"
                    mensagemVazio="Nenhum item adicionado"
                    exibirListagem={produtosNoCarrinho.length > 0}>
                    {
                        produtosNoCarrinho.map((item, i) => {
                            return (
                                <Listagem.Linha
                                    key={item.id}
                                    indice={i}
                                    ultimo={i == produtosNoCarrinho.length - 1}
                                    corPrimaria="bg-primario-100"
                                    corSecundaria="bg-primario-200">

                                    <Listagem.LinhaSemAcao >
                                        <Listagem.LinhaConteudo role={`item-carrinho-${i}`} item={item} comDecimais>
                                            {
                                                item.comentarioDetalhes ? (
                                                    <Listagem.LinhaComentarioBotao role={`item-carrinho-${i}`}
                                                        comentario="Mostrar detalhes!"
                                                        onClick={() => {
                                                            setExibirModalDetalhesComentario(true)
                                                            setDetalhesComentario(item.comentario)
                                                        }} />
                                                ) : (
                                                    <Listagem.LinhaComentario role={`item-carrinho-${i}`} comentario={item.comentario} />
                                                )
                                            }
                                        </Listagem.LinhaConteudo>
                                    </Listagem.LinhaSemAcao>

                                    <Listagem.ListaBotaoCheck role={`item-carrinho-${i}`} selecionado onClick={() => {
                                        const novosProdutosParaComprar = [...produtosParaComprar, item]
                                        const novosProdutosNoCarrinho: Produto[] = produtosNoCarrinho.filter((l) => l.id != item.id)
                                        salvarStorage(novosProdutosNoCarrinho, novosProdutosParaComprar)
                                    }} />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>

                <Divisor />

                <DivisorSomenteTexto texto={`Itens de compra (${tituloParaComprar()})`} />

                <Listagem.Root
                    roleVazia="lista-compra-vazia"
                    mensagemVazio="Nenhum item adicionado"
                    exibirListagem={produtosParaComprar.length > 0}>
                    {
                        produtosParaComprar.map((item, i) => {
                            return (
                                <Listagem.Linha
                                    key={item.id}
                                    indice={i}
                                    ultimo={i == produtosParaComprar.length - 1}
                                    corPrimaria="bg-primario-100"
                                    corSecundaria="bg-primario-200">

                                    <Listagem.LinhaSemAcao>
                                        <Listagem.LinhaConteudo role={`item-compra-${i}`} item={item} comDecimais>
                                            {
                                                item.comentarioDetalhes ? (
                                                    <Listagem.LinhaComentarioBotao role={`item-compra-${i}`}
                                                        comentario="Mostrar detalhes!"
                                                        onClick={() => {
                                                            setExibirModalDetalhesComentario(true)
                                                            setDetalhesComentario(item.comentario)
                                                        }} />
                                                ) : (
                                                    <Listagem.LinhaComentario role={`item-compra-${i}`} comentario={item.comentario} />
                                                )
                                            }
                                        </Listagem.LinhaConteudo>
                                    </Listagem.LinhaSemAcao>

                                    <Listagem.ListaBotaoCheck role={`item-compra-${i}`} onClick={() => {
                                        const novosProdutosNoCarrinho = [...produtosNoCarrinho, item]
                                        const novosProdutosParaComprar: Produto[] = produtosParaComprar.filter((l) => l.id != item.id)
                                        salvarStorage(novosProdutosNoCarrinho, novosProdutosParaComprar)
                                    }} />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>
            </Body>

            <Footer.Root>
                <Footer.BotaoLink
                    role="importar-lista"
                    css="bg-alerta-200 text-neutro-500"
                    href={URL_CARRINHO_ESCOLHA_LISTA}
                    titulo="Selecionar lista de compras"
                    desabilitar={desabilitaImportacao} />
                <Footer.Menu focoCarrinho />
            </Footer.Root>

            <Modal.Root exibir={exibirModal} titulo="Finalizar compra" >
                <Modal.Mensagem mensagem="Ao finalizar uma compra, todos os itens serão removidos do seu carrinho e do itens de compra!" />
                <Modal.Botoes>
                    <Modal.BotaoNao valor="Cancelar" onClick={() => setExibirModal(false)} />
                    <Modal.BotaoSim valor="Confirmar" onClick={() => {
                        setExibirModal(false)
                        storageMeuCarrinho.deletar()
                        salvarStorage([], [])
                    }} />
                </Modal.Botoes>
            </Modal.Root>

            <Modal.Root exibir={exibirModalDetalhesComentario} titulo="Detalhes" >
                <Modal.Mensagem mensagem={detalhesComentario} />
                <Modal.Botoes>
                    <Modal.BotaoNao valor="Cancelar" onClick={() => setExibirModalDetalhesComentario(false)} />
                    <Modal.BotaoSim valor="Confirmar" onClick={() => setExibirModalDetalhesComentario(false)} />
                </Modal.Botoes>
            </Modal.Root>
        </>
    )
}