interface ModalMensagemProp {
    mensagem: string
}

export default function ModalMensagem(prop: ModalMensagemProp) {

    return (
        <div className="text-primario-500 text-regular-label h-[66px] items-center justify-center flex m-5 text-center">
            {prop.mensagem}
        </div>
    )
}