"use client"

import { useState } from "react"
import { Excluir } from "@/app/icons"
import { Listagem } from "./Listagem"
import { Modal } from "../modal/Modal"

interface ListagemLinhaBotaoExcluirProp {
    item: ListagemDTO,
    onClickSim(item: ListagemDTO): void
}

export default function ListagemLinhaBotaoExcluir(prop: ListagemLinhaBotaoExcluirProp) {

    const [exibirModal, setExibirModal] = useState(false)

    const abrirModal = () => {
        setExibirModal(true)
    }

    return (
        <>
            <Listagem.ListaBotao onClick={() => abrirModal()} icon={Excluir} css="text-perigo-300" />

            <Modal.Root exibir={exibirModal} titulo="Atenção" >
                <Modal.Mensagem mensagem={`Deseja realmente remover o '${prop.item.descricao}'?`} />
                <Modal.Botoes>
                    <Modal.BotaoNao onClick={() => setExibirModal(false)}/>
                    <Modal.BotaoSim onClick={() => {
                        prop.onClickSim(prop.item)
                        setExibirModal(false)
                    }}/>
                </Modal.Botoes>
            </Modal.Root>
        </>
    )
}