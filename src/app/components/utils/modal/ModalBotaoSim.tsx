import { Botao } from "../Botao"

interface ModalBotaoSimProp {
    onClick: () => void
    valor?: string
}

export default function ModalBotaoSim(prop: ModalBotaoSimProp) {

    const titulo = prop.valor ? prop.valor : "Sim"

    return (
        <Botao role="ModalBotaoSim" titulo={titulo}
            css={"bg-neutro-400 rounded-none w-full h-[47px]"}
            onClick={prop.onClick}>
        </Botao>
    )
}