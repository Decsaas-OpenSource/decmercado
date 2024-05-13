import { useEffect, useState } from "react";
import Input from "../utils/Input";
import SubJanela from "./subJanela/SubJanela";
import Numerico from "./Numerico";
import TextArea from "./TextArea";
import Produto from "@/app/model/Produto";
import { Botao } from "./Botao";

interface ProdutoCadastroProp {
    exibir: boolean;
    produto: Produto
    onClose: () => void
    clickConfirmar: (produto: Produto) => void
}

export default function CadastroProduto(prop: ProdutoCadastroProp) {

    const [nome, setNome] = useState("")
    const [comentario, setComentario] = useState("")
    const [quantidade, setQuantidade] = useState(1.000)
    const [produto, setProduto] = useState<Produto>(prop.produto)

    useEffect(() => {
        setProduto(prop.produto)
        if (prop.produto) {
            setNome(prop.produto?.descricao)
            setQuantidade(prop.produto?.quantidade)
            setComentario(prop.produto?.comentario)
        }
    }, [prop.exibir])

    return (
        <SubJanela exibir={prop.exibir}>
            <div className="text-bold-paragrafo text-center p-2 text-primario-500">
                Informações - {nome}
            </div>

            <div className="h-[350px] w-[350px] p-5">
                <Input
                    role="nome-produto"
                    label="Nome*:"
                    placeHolder="Informe o nome do produto"
                    valor={nome}
                    onChange={setNome}
                />

                <br />

                <TextArea
                    role="produto-comentario"
                    label="Comentário:"
                    placeHolder="Atribua um comentário"
                    valor={comentario}
                    onChange={setComentario}
                />


                <Numerico
                    role="produto-quantidade"
                    label="Quantidade*:"
                    placeHolder="1.000"
                    valor={quantidade}
                    onChange={setQuantidade}
                />
            </div>

            <div className="flex fixed bottom-0 w-full p-5 space-x-5">
                <Botao titulo="Cancelar item"
                    css="bg-perigo-300 text-branco"
                    onClick={() => {
                        prop.onClose()
                    }} />

                <Botao 
                    role="produto-confirmar"
                    titulo="Confirmar item"
                    css="bg-neutro-400 text-branco"
                    onClick={() => {
                        const p = new Produto(produto.id, quantidade, nome, comentario)
                        prop.clickConfirmar(p)
                        prop.onClose()
                    }} />
            </div>
        </SubJanela>
    )

}