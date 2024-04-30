"use client"

import Modal from "../Modal"

import { useState } from "react"
import { Excluir } from "@/app/icons"
import { Listagem } from "./Listagem"

interface ListagemLinhaBotaoExcluirProp {
    item: ListagemDTO,
}

export default function ListagemLinhaBotaoExcluir(prop: ListagemLinhaBotaoExcluirProp) {

    const [exibirModal, setExibirModal] = useState(false)
    const [objetoParaExcluir, setObjetoParaExcluir] = useState<ListagemDTO>()

    const abrirModal = (objetoExcluir: ListagemDTO) => {
        setExibirModal(true)
        setObjetoParaExcluir(objetoExcluir)
    }

    return (
        <>
            <Listagem.ListaBotao onClick={() => abrirModal(prop.item)} icon={Excluir} />

            <Modal
                exibir={exibirModal}
                objeto={objetoParaExcluir}
                onClickNao={() => {
                    setExibirModal(false)
                }}
                onClickSim={(e: any) => {
                    setExibirModal(false)
                }} />
        </>
    )
}