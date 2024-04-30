import { useEffect, useState } from "react";
import Botao from "../utils/Botao";
import Input from "../utils/Input";
import SubJanela from "./subJanela/SubJanela";
import Numerico from "./Numerico";
import TextArea from "./TextArea";
import Produto from "@/app/model/Produto";
import ProdutoNullObject from "@/app/model/nullObject/ProdutoNullObject";


interface ProdutoCadastroProp {
    exibir: boolean;
    produto?: Produto
    onClose: () => void
    clickConfirmar: (produto:Produto) => void
}

export default function CadastroProduto(prop: ProdutoCadastroProp) {

    const [nome, setNome] = useState("")
    const [comentario, setComentario] = useState("")
    const [quantidade, setQuantidade] = useState(1.000)
    const [produto, setProduto] = useState<Produto>() 

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
                    label="Nome*:"
                    placeHolder="Informe o nome do produto"
                    valor={nome}
                    onChange={setNome}
                />

                <br />

                <TextArea
                    label="Comentário:"
                    placeHolder="Atribua um comentário"
                    valor={comentario}
                    onChange={setComentario}
                />


                <Numerico
                    label="Quantidade*:"
                    placeHolder="1.000"
                    valor={quantidade}
                    onChange={setQuantidade}
                />
            </div>

            <div className="flex fixed bottom-0 w-full p-5 space-x-5">
                <Botao titulo="Cancelar item"
                    color="bg-perigo-300"
                    css="text-branco"
                    onClick={() => {
                        prop.onClose()
                    }} />

                <Botao titulo="Confirmar item"
                    color="bg-neutro-400"
                    css="text-branco"
                    onClick={() => {
                        prop.clickConfirmar(new ProdutoNullObject())
                        prop.onClose()
                    }} />
            </div>
        </SubJanela>
    )

}