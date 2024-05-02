interface ModalBotoesProp {
    children: React.ReactNode
}

export default function ModalBotoes(prop: ModalBotoesProp) {

    return (
        <div className="w-full flex">
            {prop.children}
        </div>
    )
}