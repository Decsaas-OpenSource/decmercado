import { Check, Checked } from "@/app/icons"
import ListagemLinhaBotao from "./ListagemLinhaBotao"
import { useState } from "react"

interface ListagemLinhaBotaoCheckProp {
    role?: string, 
    onClick: (e: boolean) => void
    selecionado?: boolean
}

export default function ListagemLinhaBotaoCheck(prop: ListagemLinhaBotaoCheckProp) {

    const [selecionado, setSelecionado] = useState(prop.selecionado)

    function trocaEstado() {
        const novoSelecionado = !selecionado
        setSelecionado(novoSelecionado)
        prop.onClick(novoSelecionado)
    }

    return (
        <>
            {
                selecionado ?
                    <ListagemLinhaBotao role={`${prop.role}-check`} onClick={trocaEstado} css="text-branco" icon={Checked} />
                    :
                    <ListagemLinhaBotao role={`${prop.role}-check`} onClick={trocaEstado} css="text-neutro-300" icon={Check} />
            }
        </>
    )
}