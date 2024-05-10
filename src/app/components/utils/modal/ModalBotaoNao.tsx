import { Botao } from "../Botao"

interface ModalBotaoNaoProp {
    onClick: () => void
    valor?: string
}

export default function ModalBotaoNao(prop: ModalBotaoNaoProp) {

    const titulo = prop.valor ? prop.valor : "Não"

    return (
        <Botao role="ModalBotaoNao" titulo={titulo}
            css={"bg-perigo-300 rounded-none w-full h-[47px]"}
            onClick={prop.onClick} />
    )
}