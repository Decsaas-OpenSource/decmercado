interface ListagemRootProp {
    roleVazia?: string,
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
                        <div role={prop.roleVazia} className="bg-primario-100 text-branco flex flex-col grow justify-center
                            content-center text-center text-regular-paragrafo">
                            {prop.mensagemVazio}
                        </div>
                    )
            }
        </>
    )
}