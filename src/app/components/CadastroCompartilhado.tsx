"use client"

import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Listagem } from "./utils/listagem/Listagem";
import { Header } from "./template/header/Header";
import { Footer } from "./template/footer/Footer";

import Produto from "../model/Produto";
import ProdutoNullObject from "../model/nullObject/ProdutoNullObject";
import Body from "./template/Body";
import Input from "./utils/Input";
import CadastroProduto from "./utils/CadastroProduto";
import Dados from "../storage/local/Dados";
import Lista from "../model/lista/Lista";
import { DivisorSomenteTexto } from "./utils/Divisor";
import { Remover } from "../icons";
import { BotaoComIcone } from "./utils/Botao";
import { Modal } from "./utils/modal/Modal";
import { useRouter } from "next/navigation";

interface CadastroCompartilhadoProp {
    storage: [Dados<Lista>, Dispatch<SetStateAction<Dados<Lista>>>];
    lista: [Lista, Dispatch<SetStateAction<Lista>>];
    urlOrigem: string
}

export default function CadastroCompartilhado(prop: CadastroCompartilhadoProp) {

    const urlParametro = useParams<{ id: string }>();

    const [produtoParaEdicao, setProdutoParaEdicao] = useState<Produto>(new ProdutoNullObject())
    const [exibirProduto, setExibirProduto] = useState(false)

    const [nome, setNome] = useState("")
    const [produtos, setProdutos] = useState<Produto[]>([])

    const [storage] = prop.storage
    const [lista, setLista] = prop.lista

    const [exibirModal, setExibirModal] = useState(false)

    const router = useRouter()

    useEffect(() => {
        storage.carregar()
        setLista(storage.procurar(urlParametro.id))
    }, [storage])

    useEffect(() => {
        setNome(lista.descricao)
        setProdutos(lista.produtos)
    }, [lista])

    function editarProduto(produto: Produto) {
        setProdutoParaEdicao(produto)
        setExibirProduto(true)
    }

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor={nome}></Header.Titulo>
                </Header.Conteudo>
                <Header.Botao>
                    <BotaoComIcone
                        icon={Remover} css="text-perigo-300"
                        onClick={() => {
                            setExibirModal(true)
                        }} />
                </Header.Botao>
            </Header.Root>

            <Body css="text-primario-500">
                <Input
                    label="Nome*:"
                    placeHolder="Atribua um nome"
                    valor={nome}
                    onChange={(e) => {
                        setNome(e)
                        lista.descricao = e
                        storage.salvar(lista)
                    }}
                    tamanhoMaximo={20}
                />

                <DivisorSomenteTexto texto="Itens" />

                <Listagem.Root
                    mensagemVazio="Nenhum item adicionado"
                    exibirListagem={produtos.length > 0}>
                    {
                        produtos.map((item, i) => {
                            return (
                                <Listagem.Linha
                                    key={item.id}
                                    indice={i}
                                    ultimo={i == produtos.length - 1}
                                    corPrimaria="bg-primario-100"
                                    corSecundaria="bg-primario-200">

                                    <Listagem.LinhaOnClick item={item} onClick={(e) => editarProduto(item)}>
                                        <Listagem.LinhaConteudo item={item} comDecimais>
                                            <Listagem.LinhaComentario comentario={item.comentario} />
                                        </Listagem.LinhaConteudo>
                                    </Listagem.LinhaOnClick>

                                    <Listagem.ListaBotaoExcluir item={item}
                                        onClickSim={(produto) => {
                                            const produtosFiltrado = produtos.filter((p) => p.id != produto.id)
                                            lista.produtos = produtosFiltrado
                                            setProdutos(lista.produtos)                                            
                                            storage.salvar(lista)
                                        }}
                                    />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>
            </Body>

            <Footer.Root>
                <Footer.Botao color="bg-neutro-400"
                    titulo="Adicionar novo item"
                    onClick={() => {
                        editarProduto(new ProdutoNullObject())
                    }} />
                <Footer.Menu focoHome />
            </Footer.Root>

            <CadastroProduto
                exibir={exibirProduto}
                produto={produtoParaEdicao}
                onClose={() => {
                    setExibirProduto(false)
                }}
                clickConfirmar={(produto) => {
                    const produtosFiltrados = produtos.filter((p) => p.id != produto.id)
                    const produtosNovos = [...produtosFiltrados, produto]
                    lista.produtos = produtosNovos                    
                    setProdutos(lista.produtos)
                    storage.salvar(lista)
                }} />

            <Modal.Root exibir={exibirModal} titulo="Atenção" >
                <Modal.Mensagem mensagem="Deseja realmente excluir?" />
                <Modal.Botoes>
                    <Modal.BotaoNao valor="Cancelar" onClick={() => setExibirModal(false)} />
                    <Modal.BotaoSim valor="Confirmar" onClick={() => {
                        storage.deletar(lista)
                        router.push(prop.urlOrigem)
                    }} />
                </Modal.Botoes>
            </Modal.Root>
        </>
    )
}