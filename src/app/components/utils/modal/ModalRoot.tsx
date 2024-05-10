import SubJanela from "../subJanela/SubJanela"

interface ModalRootProp {
    exibir: boolean
    titulo: string
    children: React.ReactNode
}

export default function ModalRoot(prop: ModalRootProp) {

    return (
        <SubJanela role="Modal" exibir={prop.exibir} >
            <div className="bg-perigo-200 text-bold-sub-titulo text-branco h-[41px] items-center justify-center flex">
                {prop.titulo}
            </div>
            {prop.children}
        </SubJanela>
    )
}