"use client"

import Body from "@/app/components/template/Body"
import { Footer } from "@/app/components/template/footer/Footer"
import { Header } from "@/app/components/template/header/Header"
import { Listagem } from "@/app/components/utils/listagem/Listagem"
import { useState } from "react"
import { useParams } from "next/navigation"

import Input from "@/app/components/utils/Input"
import CadastroProduto from "@/app/components/utils/CadastroProduto"
import Produto from "@/app/model/Produto"
import ProdutoNullObject from "@/app/model/nullObject/ProdutoNullObject"

const produtos: Produto[] = [
    new ProdutoNullObject(),
    new ProdutoNullObject(),
    new ProdutoNullObject()
]

export default function CadastroLista() {

    const urlParametro = useParams<{ id: string }>();

    const [produtoParaEdicao, setProdutoParaEdicao] = useState<Produto>()
    const [exibirProduto, setExibirProduto] = useState(false)

    const [nome, setNome] = useState("")

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
                    }}
                    tamanhoMaximo={20}
                />

                <div className="text-bold-paragrafo text-center m-2 text-primario-500">
                    Itens
                </div>

                <Listagem.Root
                    mensagemVazio="Nenhum item adicionado"
                    exibirListagem={true}>
                    {
                        produtos.map((item, i) => {
                            return (
                                <Listagem.Linha
                                    key={item.id}
                                    indice={i}
                                    ultimo={false}
                                    corPrimaria="bg-primario-100"
                                    corSecundaria="bg-primario-200">

                                    <Listagem.LinhaOnClick item={item} onClick={(e) => alert(item)}>
                                        <Listagem.LinhaConteudo item={item}>
                                            <Listagem.LinhaComentario comentario={item.comentario} />
                                        </Listagem.LinhaConteudo>
                                    </Listagem.LinhaOnClick>

                                    <Listagem.ListaBotaoExcluir item={item}></Listagem.ListaBotaoExcluir>
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
                        alert("aaaaa")
                    }} />

            </Body>

            <Footer.Root>
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}