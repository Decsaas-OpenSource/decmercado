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

interface CadastroCompartilhadoProp {
    storage: [Dados<Lista>, Dispatch<SetStateAction<Dados<Lista>>>];
    lista: [Lista, Dispatch<SetStateAction<Lista>>];
}

export default function CadastroCompartilhado(prop: CadastroCompartilhadoProp) {

    const urlParametro = useParams<{ id: string }>();

    const [produtoParaEdicao, setProdutoParaEdicao] = useState<Produto>(new ProdutoNullObject())
    const [exibirProduto, setExibirProduto] = useState(false)

    const [nome, setNome] = useState("")
    const [produtos, setProdutos] = useState<Produto[]>([])

    const [storage] = prop.storage
    const [lista, setLista] = prop.lista

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

                <div className="text-bold-paragrafo text-center m-2 text-primario-500">
                    Itens
                </div>

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
                                        <Listagem.LinhaConteudo item={item}>
                                            <Listagem.LinhaComentario comentario={item.comentario} />
                                        </Listagem.LinhaConteudo>
                                    </Listagem.LinhaOnClick>

                                    <Listagem.ListaBotaoExcluir item={item}
                                        onClickSim={(produto) => {
                                            const produtosFiltrado = produtos.filter((p) => p.id != produto.id)
                                            setProdutos(produtosFiltrado)
                                            lista.produtos = produtosFiltrado
                                            storage.salvar(lista)
                                        }}
                                    />
                                </Listagem.Linha>
                            )
                        })
                    }
                </Listagem.Root>

                <CadastroProduto
                    exibir={exibirProduto}
                    produto={produtoParaEdicao}
                    onClose={() => {
                        setExibirProduto(false)
                    }}
                    clickConfirmar={(produto) => {
                        const produtosNovos = [...produtos, produto]
                        setProdutos(produtosNovos)
                        lista.produtos = produtosNovos
                        storage.salvar(lista)
                    }} />

            </Body>

            <Footer.Root>
                <Footer.Botao color="bg-neutro-400"
                    titulo="Adicionar novo item"
                    onClick={() => {
                        editarProduto(new ProdutoNullObject())
                    }} />
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}