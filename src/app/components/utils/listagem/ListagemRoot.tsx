interface ListagemRootProp {
    mensagemVazio: string
    exibirListagem: boolean
    children: React.ReactNode
}

export default function ListagemRoot(prop: ListagemRootProp) {
   
    return (
        <>
            {
                prop.exibirListagem ? prop.children
                    : (
                        <div className="bg-primario-100 text-branco h-full
                            content-center text-center text-regular-paragrafo">
                            {prop.mensagemVazio}
                        </div>
                    )
            }
        </>
    )
}