interface ModalMensagemProp {
    mensagem: string
}

export default function ModalMensagem(prop: ModalMensagemProp) {

    const mensagem = prop.mensagem.split("\r")

    return (
        <div className={`text-primario-500 text-regular-label h-[66px] 
            ${mensagem.length > 1 ? "items-start" : "items-center"} justify-center flex flex-col m-5 text-center`}>
            {mensagem.map((m, i) => <span key={i} role={i.toString()}>{m}</span>)}
        </div>
    )
}